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
            return { ...state, ...action.userData, authorized: true };
        default: 
            return state;
    }
};


const setUserData = (id, login, email) => {
  return {
    type: SET_USER_DATA,
    userData: {
      id,
      login,
      email
    }
  }
};


export const setAuthData = () => (dispatch) => {
  authAPI.getAuth()
    .then(data => {
      if (!data.resultCode) {
        const { id, login, email } = data.data;
        dispatch(setUserData(id, login, email));
      }
    });
};


export default authReducer;