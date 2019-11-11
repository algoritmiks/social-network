import React from 'react';
import css from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={css.item}>
                post 1
            </div>

            <div className={css.item}>
                post 2
            </div>
        </div>
    );
}


export default Post;