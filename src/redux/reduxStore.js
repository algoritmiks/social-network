import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    usersComponent: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;