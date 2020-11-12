import React from 'react';
import { reduxForm, Field } from 'redux-form';

import css from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import {requiredField, checkMaxLength} from '../../helpers/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControls';


const Dialogs = (props) => {
    let conversationsElems = props.dialogsComponent.conversations.map(name => <DialogItem id={name.id} key={name.id} name={name.name} />);
    
    let messagesElements = props.dialogsComponent.messages.map(message => <Message msg={message.msg} key={message.id} />)

    const addNewMessage = (values) => {
      props.newMessageSend(values.messageBody);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                { conversationsElems }
            </div>

            <div className={css.messages}>
                { messagesElements }
            </div>
            <ReduxAddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}

const maxLengthCreator = checkMaxLength(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          placeholder="enter your message here" 
          component={Textarea} 
          validate={[requiredField, maxLengthCreator]} 
          name="messageBody" 
        />
      </div>
      <div>
        <button type={"submit"}>send</button>
      </div>
    </form>
  )
}

const ReduxAddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;