import React from 'react';
import css from './Post.module.css';

const Post = () => {
    return (
        <div className={css.item}>
            <div>
                post 1
            </div>
            <img src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" />
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;