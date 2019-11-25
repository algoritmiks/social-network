import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => { //props.store
    
    let state = props.store.getState().dialogsComponent;

    const updateText = (text) => {
        let action = updateNewMessageTextActionCreate(text);
        props.store.dispatch(action);
    };

    const newMessageSend = () => {
        let action = newMessageActionCreate();
        props.store.dispatch(action);
    };

    return (
        <Dialogs conversations = { state.conversations }
        messages = { state.messages }
        updateText = { updateText }
        newMessageText = { state.newMessageText }
        newMessageSend = { newMessageSend }
        />
    );
}

export default DialogsContainer;