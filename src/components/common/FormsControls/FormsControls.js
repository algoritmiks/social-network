import React from 'react';

import css from './FormsControls.module.css';


export const Textarea = ({input, meta, ...props}) => {
  const someError = meta.error && meta.touched;
  return (
    <div>
      <div>
        <textarea {...input} {...props} className = {someError ? css.error : ""}/>
      </div>
      { someError && <span className={css.error}>{meta.error}</span>}
    </div>
  )
}


export const Input = ({input, meta, ...props}) => {
  const someError = meta.error && meta.touched;
  return (
    <div>
      <div>
        <input {...input} {...props} className = {someError ? css.error : ""}/>
      </div>
      { someError && <span className={css.error}>{meta.error}</span>}
    </div>
  )
}