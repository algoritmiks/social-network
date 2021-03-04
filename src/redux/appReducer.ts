import { getAuthData } from './authReducer';

const SET_INIT_APP = "SET_INIT_APP";

export type StateType = {
    appInit: boolean
}

const initialState: StateType = {
  appInit: false
};

const appReducer = ( state = initialState, action: InitAppActionType ): StateType => {
    switch( action.type ) { 
        case SET_INIT_APP:
            return { ...state, appInit: true };
        default: 
            return state;
    }
};


type InitAppActionType = {
    type: typeof SET_INIT_APP;
}

const initApp = (): InitAppActionType => ({type: SET_INIT_APP});


export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthData());
  Promise.all([promise])
    .then(() => {
      dispatch(initApp());    
    })
}

export default appReducer;