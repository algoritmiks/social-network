import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';




let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    usersComponent: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;