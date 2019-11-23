import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';

let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer
});

let store = createStore(reducers);

export default store;