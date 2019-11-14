import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

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
                { conversationsElems }
            </div>

            <div className={css.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;