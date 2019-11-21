import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/state';

const Dialogs = (props) => {
    debugger;
    let conversationsElems = props.state.conversations.map(name => <DialogItem id={name.id} name={name.name} />);
    
    let messagesElements = props.state.messages.map(message => <Message msg={message.msg} />)

    let newMessageElem = React.createRef();

    const updateText = () => {
        let action = updateNewMessageTextActionCreate(newMessageElem.current.value);
        props.dispatch(action);
    };

    const newMessage = () => {
        let action = newMessageActionCreate();
        props.dispatch(action);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { conversationsElems }
            </div>

            <div className={css.messages}>
                { messagesElements }
            </div>

            <textarea onChange={ updateText } ref={ newMessageElem } value={ props.state.newMessageText }></textarea> <br/>
            <button onClick={ newMessage }>send</button>
        </div>
    );
}

export default Dialogs;