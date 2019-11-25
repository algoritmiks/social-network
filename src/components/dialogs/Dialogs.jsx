import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
    
    let conversationsElems = props.state.conversations.map(name => <DialogItem id={name.id} name={name.name} />);
    
    let messagesElements = props.state.messages.map(message => <Message msg={message.msg} />)

    const updateText = (event) => {
        props.updateText(event.target.value)
    };

    const newMessageSend = () => {
        props.newMessageSend();
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { conversationsElems }
            </div>

            <div className={css.messages}>
                { messagesElements }
            </div>

            <textarea onChange={ updateText } value={ props.state.newMessageText }
                placeholder={ "enter your message here" }></textarea> <br/>
                
            <button onClick={ newMessageSend }>send</button>
        </div>
    );
}

export default Dialogs;