// @flow
import React from 'react';
import { Field } from 'redux-form';

type Props = {
  input: Object,
  meta: Object,
  label: string,
  fieldId: string,
  children: React.Node,
};

export default ({input, label, fieldId, children, meta: {asyncValidating, touched, error}}: Props) => {
  return (
    <div className={`${touched && error ? 'has-error' : ''}`}>
      <div className="checkbox">
        <div className={asyncValidating ? 'async-validating' : ''}>
          <label htmlFor={fieldId || ''}>
            <input id={fieldId || ''} {...input} checked={input.value} type="checkbox"/> &nbsp;
            {children}
          </label>
        </div>
        {touched && error && <span className="help-block"> {error} </span>}
      </div>
    </div>
  );
};
