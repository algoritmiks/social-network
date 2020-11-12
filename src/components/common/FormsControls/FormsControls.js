import React from 'react';

import css from './FormsControls.module.css';



const FormControl = ({input, meta, child, ...props}) => {
  const someError = meta.error && meta.touched;
  return (
    <div>
      <div className = {someError ? css.error : ""}>
        {props.children} 
      </div>
      { someError && <span className={css.error}>{meta.error}</span>}
    </div>
  )
}


export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}