import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreate, newMessageActionCreate } from '../../redux/dialogsReducer';
import StoreContext from '../../../src/storeContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsComponent;

                    const updateText = (text) => {
                        let action = updateNewMessageTextActionCreate(text);
                        store.dispatch(action);
                    };

                    const newMessageSend = () => {
                        let action = newMessageActionCreate();
                        store.dispatch(action);
                    };

                    return (
                        <Dialogs
                            updateText={updateText}
                            newMessageSend={newMessageSend}
                            state={state}
                        />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;



