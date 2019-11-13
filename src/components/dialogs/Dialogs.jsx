import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialogs.module.css';


const DialogItem = (props) => {
    return (
    <div className={css.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.msg}>
            {props.msg}
        </div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={`${css.dialog} ${css.active}`}>
                    <NavLink to="/dialogs/1">Sveta</NavLink>
                </div>

                <DialogItem id="2" name="Matt"/>

                <DialogItem id="3" name="Peter"/>

                <DialogItem id="4" name="Jon"/>
            </div>

            <div className={css.messages}>

                <Message msg="Hello!" />
                <Message msg="How are you?" />
                <Message msg="I'm OK! And how are you?" />
                
            </div>
        </div>
    );
}

export default Dialogs;