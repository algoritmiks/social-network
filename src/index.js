import state from './redux/state';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './redux/state';


const render = () => {
    ReactDOM.render(<App state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText}
        />, document.getElementById('root'));
}


render(state);
subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
