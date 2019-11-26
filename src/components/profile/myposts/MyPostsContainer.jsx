import React from 'react';
import { updateNewPostTextActionCreate, newPostActionCreate } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {
                (store) => {

                    const newPost = () => {
                        let action = newPostActionCreate();
                        store.dispatch(action);
                    };

                    const updateText = (text) => {
                        let action = updateNewPostTextActionCreate(text);
                        store.dispatch(action);
                    };

                    let postsData = store.getState().profileComponent.postsData;
                    
                    return (<MyPosts
                        newPost={newPost}
                        updateText={updateText}
                        postsData={postsData}
                    />);
                }
            }
            
        </StoreContext.Consumer>

    );
}


export default MyPostsContainer;