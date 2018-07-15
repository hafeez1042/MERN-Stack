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
};

export default ({ input, label, type, fieldId, placeholder, meta: { asyncValidating, touched, error } }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldId || ''}>{label}</label>
      <div className={`${asyncValidating ? asyncValidatingStyle : ''} form-input`}>
        <input {...input} type={type || 'text'} id={fieldId || ''} placeholder={placeholder || ''} className="form-control" />
        {asyncValidating && <Spinner size="small" />}
        {touched && error && <span className="help-block"> {error} </span>}
      </div>
    </div>
  );
};
