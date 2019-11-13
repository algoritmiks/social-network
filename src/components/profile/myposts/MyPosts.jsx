import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
    let postsData = [
    {id: 1, post: "Hi there! How are you?", likes: 5},
    {id: 2, post: "I'm going to hard work!", likes: 100},
    ]
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Enter your post here</textarea> <br/>
                <button>Add post</button>
                <button>Delete post</button>
            </div>

            <Post msg={postsData[0].post} likes={postsData[0].likes} />
            <Post msg={postsData[1].post} likes={postsData[1].likes} />
        </div>
    );
}


export default MyPosts;