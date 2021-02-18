import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, checkMaxLength} from '../../helpers/validators/validator';
import { Input } from '../common/formsControls/FormsControls';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import css from '../common/formsControls/FormsControls.module.css';

const maxLengthCreator = checkMaxLength(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          placeholder={"email"} 
          component={Input} 
          name={"email"}
          validate={[requiredField, maxLengthCreator]}             
        />
      </div>
      <div>
        <Field 
          placeholder="password"
          component={Input} 
          name="password" 
          type="password"
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
      {props.error && <div className={css.error} > {props.error} </div>}

      {props.captchaURL && 
        <div>
            <img src={props.captchaURL} alt="captcha"/>

            <div>
                <Field
                    placeholder="captcha"
                    component={Input}
                    name="captcha"
                    type="text"
                    validate={[requiredField]}
                />
            </div>
        </div>}

      <div>
        <button type={"submit"}>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.authorized) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm 
        onSubmit={onSubmit}
        captchaURL = {props.captchaURL}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    authorized:  state.auth.authorized,
    captchaURL: state.auth.captchaURL
  }
};

export default connect(mapStateToProps, { login })(Login);