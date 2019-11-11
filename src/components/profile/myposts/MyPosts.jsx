import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>Enter your post here</textarea> <br/>
                <button>Add post</button>
                <button>Delete post</button>
            </div>

            <Post msg="Hi there! How are you?" likes="5" />
            <Post msg="I'm going to hard work!" likes="100" />
        </div>
    );
}


export default MyPosts;