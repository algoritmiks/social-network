import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    usersComponent: usersReducer
});

let store = createStore(reducers);

export default store;