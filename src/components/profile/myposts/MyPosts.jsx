import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    
    let postsArray = props.postsData.map( post => <Post msg={post.post} likes={post.likes} /> );

    const addPost = () => {
        props.newPost();
    };

    const updateText = () => {
        props.updateText(newPostElem.current.value)
    };

    let newPostElem = React.createRef();
    
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={ updateText } 
                    ref={ newPostElem } 
                    placeholder={ "enter your post here" } 
                    value={ props.newPostText } 
                />
                <br/>
                <button onClick={ addPost }>Add post</button>
                <button>Delete post</button>
            </div>

            { postsArray }

        </div>
    );
}


export default MyPosts;