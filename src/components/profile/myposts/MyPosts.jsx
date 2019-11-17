import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    let postsArray = props.postsData.map( post => <Post msg={post.post} likes={post.likes} /> );

    const newPost = () => {
        props.addPost();
    };

    const updateText = () => {
        props.updateNewPostText(newPostElem.current.value);
    }

    let newPostElem = React.createRef();
    
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={ updateText } ref={ newPostElem } value={ props.newPostText } />
                <br/>
                <button onClick={ newPost }>Add post</button>
                <button>Delete post</button>
            </div>

            { postsArray }

        </div>
    );
}


export default MyPosts;