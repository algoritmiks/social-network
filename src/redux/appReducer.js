import { getAuthData } from './authReducer';

const SET_INIT_APP="SET_INIT_APP";

let initialState = {
  appInit: false
};

const appReducer = (state=initialState, action) => {
    switch(action.type) { 
        case SET_INIT_APP:
            return { ...state, appInit: true };
        default: 
            return state;
    }
};


const initApp = () => {
  return {
    type: SET_INIT_APP,
    appInit: true
  }
};


export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthData());
  Promise.all([promise])
    .then(() => {
      dispatch(initApp());    
    })
}

export default appReducer;