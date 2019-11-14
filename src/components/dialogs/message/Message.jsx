import React from 'react';
import css from './Message.module.css';

const Message = (props) => {
    return <div className={css.msg}> { props.msg } </div>
}

export default Message;