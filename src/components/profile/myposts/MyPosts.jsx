import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
    let postsData = [
    {id: 1, post: "Hi there! How are you?", likes: 5},
    {id: 2, post: "I'm going to hard work!", likes: 100},
    ]

    let postsArray = postsData.map( post => <Post msg={post.post} likes={post.likes} />);
    
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Enter your post here</textarea> <br/>
                <button>Add post</button>
                <button>Delete post</button>
            </div>

            { postsArray }

        </div>
    );
}


export default MyPosts;