import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA="SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  authorized: false
};

const authReducer = (state=initialState, action) => {
    switch(action.type) { 
        case SET_USER_DATA:
            return { ...state, ...action.payload };
        default: 
            return state;
    }
};


const setUserData = (id, login, email, authorized) => {
  return {
    type: SET_USER_DATA,
    payload: {
      id,
      login,
      email,
      authorized
    }
  }
};


export const getAuthData = () => (dispatch) => {
  return authAPI.getAuth()
    .then(data => {
      if (!data.resultCode) {
        const { id, login, email } = data.data;
        dispatch(setUserData(id, login, email, true));
      }
    });
};


export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
  .then(res => {
    if (!res.data.resultCode) {
      dispatch(getAuthData());
    } else {
      const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'wrong auth data';
      dispatch(stopSubmit('login', {_error: msg}));
    }
    });
};


export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(res => {
      if (!res.data.resultCode) {
        dispatch(setUserData(null, null, null, false));
      }
    });
};

export default authReducer;