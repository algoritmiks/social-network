import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    usersComponent: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;