import store from './redux/reduxStore';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const renderAllPages = (state) => {
    ReactDOM.render(<App state={ state } 
        store={ store }
        dispatch={ store.dispatch.bind(store) }
        />, document.getElementById('root'));
}

renderAllPages(store.getState());
store.subscribe( () => { renderAllPages(store.getState()) } );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
