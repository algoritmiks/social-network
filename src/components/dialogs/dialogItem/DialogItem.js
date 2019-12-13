import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={css.dialog} >
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;