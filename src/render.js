import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';

export const render = (data) => {
    ReactDOM.render(<App data={data} addPost={addPost}/>, document.getElementById('root'));
}

