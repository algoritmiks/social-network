import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';
import { updateNewPostTextActionCreate, newPostActionCreate } from '../../../redux/store';


const MyPosts = (props) => {
    let postsArray = props.postsData.map( post => <Post msg={post.post} likes={post.likes} /> );

    const newPost = () => {
        let action = newPostActionCreate();
        props.dispatch(action);
    };

    const updateText = () => {
        let action = updateNewPostTextActionCreate(newPostElem.current.value);
        props.dispatch(action);
    };

    let newPostElem = React.createRef();
    
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={ updateText } ref={ newPostElem } placeholder={ "enter your post here" } value={ props.newPostText } />
                <br/>
                <button onClick={ newPost }>Add post</button>
                <button>Delete post</button>
            </div>

            { postsArray }

        </div>
    );
}


export default MyPosts;