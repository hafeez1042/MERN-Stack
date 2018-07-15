// @flow
import React from 'react';
import { Field } from 'redux-form';

type Props = {
  input: Object,
  meta: Object,
  label: string,
  defaultValue: string,
  options: Array<Object>,
};

export default ({ input, options, label, meta: { asyncValidating, touched, error } }: Props) => {
  return (
    <div className={`${touched && error ? 'has-error' : ''}`}>
      <div className={asyncValidating ? 'async-validating clearfix' : 'clearfix'}>
        <label>
          {label}
        </label>
        <div>
          {options.map(({ label, value }) => {
            return (
              <div className="form-check float-left" key={`${value}`} >
                <Field
                  id={`${input.name}`}
                  component="input"
                  name={input.name}
                  type="radio"
                  value={value}
                  className="form-check-input"
                />
                <label className="pr-2 form-check-label" htmlFor={`${input.name}-${value}`}>
                  {label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {touched && error && <span className="help-block"> {error} </span>}
    </div>
  );
};
