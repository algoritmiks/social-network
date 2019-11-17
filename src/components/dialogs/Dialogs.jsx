import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

    let conversationsElems = props.state.conversations.map(name => <DialogItem id={name.id} name={name.name} />);
    
    let messagesElements = props.state.messages.map(message => <Message msg={message.msg} />)

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