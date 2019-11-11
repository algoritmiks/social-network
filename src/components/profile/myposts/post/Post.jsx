import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={css.item}>
            <div>
                {props.msg}
            </div>
            <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
            <div>
                <span>like </span>
                {props.likes}
                
            </div>
        </div>
    );
}

export default Post;