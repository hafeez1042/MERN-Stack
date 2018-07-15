// @flow
import React from 'react';
import Spinner from '../Spinner';
import { asyncValidatingStyle } from './style.scss';

type Props = {
  label: string,
  type?: string,
  fieldId?: string,
  placeholder?: string,
  input: Object,
  meta: Object,
  defaultValue: string,
  children: React.Node,
};

export default ({input, label, fieldId, defaultValue, children, meta: {asyncValidating, touched, error}}: Props) => {
  return (
    <div className={`${touched && error ? 'has-error' : ''} form-group`}>
      <label htmlFor={fieldId || ''}> {label} </label>
      <div className={`${asyncValidating ? asyncValidatingStyle : '' } form-input`}>
        <select {...input} id={fieldId || ''} value={input.value || defaultValue} className="form-control">
          {children}
        </select>
        {asyncValidating && <Spinner size="small"/>}
        {touched && error && <span className="help-block"> {error} </span>}
        {/* {error && error.async && <span className=""> {error.message} </span>} */}
      </div>
    </div>
  );
};
