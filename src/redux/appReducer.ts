import { getAuthData } from './authReducer';

const SET_INIT_APP = "SET_INIT_APP";

export type StateType = {
    appInit: boolean
}

const initialState: StateType = {
  appInit: false
};

const appReducer = ( state = initialState, action: InitAppActionCreator ): StateType => {
    switch( action.type ) { 
        case SET_INIT_APP:
            return { ...state, appInit: true };
        default: 
            return state;
    }
};


type InitAppActionCreator = {
    type: typeof SET_INIT_APP;
}

const initApp = (): InitAppActionCreator => ({type: SET_INIT_APP});


export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthData());
  Promise.all([promise])
    .then(() => {
      dispatch(initApp());    
    })
}

export default appReducer;