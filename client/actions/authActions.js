import { APIInstance as axios, setAccessTokenHeader } from '../helpers/axios';
import { REGISTER_API, LOGIN_API, VERIFYAUTH_API } from '../const/API';
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_VERIFY } from '../const/actionTypes';

export const register = (data) => {
  return dispatch => {
    dispatch({ type: USER_REGISTER.PENDING });
    axios.post(REGISTER_API, data)
      .then(({ data: { accessToken, user } }) => {
        setAccessTokenHeader(accessToken);
        saveToken(accessToken, false);
        dispatch({
          type: USER_REGISTER.SUCCESS,
          payload: user,
        });
      }).catch(err => {
        dispatch({
          type: USER_REGISTER.FAIL,
          payload: err,
        });
      });
  };
};

export const login = (data) => {
  return dispatch => {
    dispatch({ type: USER_REGISTER.PENDING });
    axios.post(LOGIN_API, data)
      .then(({ data: { accessToken, user } }) => {
        setAccessTokenHeader(accessToken);
        saveToken(accessToken, data.remember);
        dispatch({
          type: USER_LOGIN.SUCCESS,
          payload: user,
        });
      }).catch(err => {
        dispatch({
          type: USER_LOGIN.FAIL,
          payload: err,
        });
      });
  };
};

export const verifyAuth = () => {
  return dispatch => {
    const accessToken = sessionStorage.getItem('token') || localStorage.getItem('token');
    if (!accessToken) {
      removeToken();
      return dispatch({ type: USER_VERIFY.FAIL });
    }

    axios.post(VERIFYAUTH_API, { token: accessToken })
      .then(({ data }) => {
        dispatch({
          type: USER_VERIFY.SUCCESS,
          payload: data,
        });
      }).catch(() => {
        removeToken();
        dispatch({ type: USER_VERIFY.FAIL });
      });
  };
};

export const logout = () => {
  removeToken();
  return { type: USER_LOGOUT };
};

const saveToken = (token, remember = false) => {
  if (remember) {
    localStorage.setItem('token', token);
  }
  sessionStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}
