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

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    );
}


export default MyPosts;