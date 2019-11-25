import React from 'react';
import { updateNewPostTextActionCreate, newPostActionCreate } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    const newPost = () => {
        let action = newPostActionCreate();
        props.store.dispatch(action);
    };

    const updateText = (text) => {
        let action = updateNewPostTextActionCreate(text);
        props.store.dispatch(action);
    };

    let postsData = props.store.getState().profileComponent.postsData;
    
    return (
        <MyPosts 
        newPost= { newPost }
        updateText = { updateText }
        postsData={ postsData }
        />
    );
}


export default MyPostsContainer;