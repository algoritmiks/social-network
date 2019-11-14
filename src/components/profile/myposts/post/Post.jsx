import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={css.item}>
            <div>
                {props.msg}
            </div>
            <img src='/img/ava6.png' alt="avatar" />
            <div>
                <span>like </span>
                {props.likes}
                
            </div>
        </div>
    );
}

export default Post;