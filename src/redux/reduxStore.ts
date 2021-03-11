import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    app: appReducer,
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    usersComponent: usersReducer,
    auth: authReducer,
    form: formReducer
});

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));

//@ts-ignore
// let store = createStore(reducers, applyMiddleware(thunk));
window._store = store;

export default store;