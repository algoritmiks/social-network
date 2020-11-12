import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, checkMaxLength} from '../../helpers/validators/validator';
import { Input } from '../common/FormsControls/FormsControls';

const maxLengthCreator = checkMaxLength(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          placeholder={"Login"} 
          component={Input} 
          name={"login"}
          validate={[requiredField, maxLengthCreator]}             
        />
      </div>
      <div>
        <Field 
          placeholder={"Password"} 
          component={Input} 
          name={"password"} 
          validate={[requiredField, maxLengthCreator]} 
        />
      </div>
      <div>
        <Field 
          component={Input} 
          type={"checkbox"} 
          name={"rememberMe"}
        /> remember me
    </div>
      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;