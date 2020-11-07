import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
    let conversationsElems = props.dialogsComponent.conversations.map(name => <DialogItem id={name.id} key={name.id} name={name.name} />);
    
    let messagesElements = props.dialogsComponent.messages.map(message => <Message msg={message.msg} key={message.id} />)

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

            <textarea onChange={ updateText } value={ props.dialogsComponent.newMessageText }
                placeholder={ "enter your message here" }></textarea> <br/>
                
            <button onClick={ newMessageSend }>send</button>
        </div>
    );
}


export default Dialogs;