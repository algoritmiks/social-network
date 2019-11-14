import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialogs.module.css';


const DialogItem = (props) => {
    return (
        <div className={css.dialog} activeClassName={css.active}>
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

    let conversations = [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Danil" },
        { id: 3, name: "Anna" },
        { id: 4, name: "Aleksei" }
    ]

    let messages = [
        { id: 1, msg: "Hello, there!" },
        { id: 2, msg: "How are you?" },
        { id: 3, msg: "What going on there?" }
    ]

    let conversationsElems = conversations.map(name => <DialogItem id={name.id} name={name.name} />);

    let messagesElements = messages.map(message => <Message msg={message.msg} />)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {conversationsElems}
            </div>

            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;