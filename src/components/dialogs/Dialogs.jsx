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

    let usersData = [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Danil"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Aleksei"}
    ]

    let message = [
        {id: 1, msg: "Hello, there!"},
        {id: 2, msg: "How are you?"},
        {id: 3, msg: "What going on there?"}
    ]
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>

                <DialogItem className={css.active} id={usersData[0].id} name={usersData[0].name}/>

                <DialogItem id={usersData[1].id} name={usersData[1].name}/>

                <DialogItem id={usersData[2].id} name={usersData[2].name}/>

                <DialogItem id={usersData[3].id} name={usersData[3].name}/>

                
            </div>

            <div className={css.messages}>

                <Message msg={message[0].msg} />
                <Message msg={message[1].msg} />
                <Message msg={message[2].msg} />
                
            </div>
        </div>
    );
}

export default Dialogs;