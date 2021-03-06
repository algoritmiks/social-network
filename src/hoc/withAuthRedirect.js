import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const isAuthStateToProps = (state) => {
  return { isAuth: state.auth.authorized }
}

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) { return <Redirect to='/login' /> }
    return <Component {...props} />
  }
  const IsAuthConnected = connect(isAuthStateToProps)(RedirectComponent);
  return IsAuthConnected;
}
