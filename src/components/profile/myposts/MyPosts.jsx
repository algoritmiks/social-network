import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {

    let postsArray = props.postsData.map( post => <Post msg={post.post} likes={post.likes} /> );
    

    const newPost = () => {
        debugger;
        props.addPost(newPostElem.current.value);
        newPostElem.current.value = '';
    };

    const delPost = () => {
        alert('soon');
    };

    let newPostElem = React.createRef();
    

    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostElem }></textarea> <br/>
                <button onClick={ newPost }>Add post</button>
                <button onClick={ delPost }>Delete post</button>
            </div>

            { postsArray }

        </div>
    );
}


export default MyPosts;