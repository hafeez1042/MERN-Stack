// @flow
import axios from 'axios';

export const APIInstance = axios.create();

export const setAccessTokenHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
