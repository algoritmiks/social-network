import React from 'react';
import css from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <button>Add post</button>
                new post
            </div>

            <div className={css.item}>
                post 1
            </div>

            <div className={css.item}>
                post 2
            </div>
        </div>
    );
}


export default MyPosts;