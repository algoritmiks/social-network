import MyPosts from './MyPosts';
import { newPostActionCreate } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//             {
//                 (store) => {

//                     const newPost = () => {
//                         let action = newPostActionCreate();
//                         store.dispatch(action);
//                     };

//                     const updateText = (text) => {
//                         let action = updateNewPostTextActionCreate(text);
//                         store.dispatch(action);
//                     };

//                     let postsData = store.getState().profileComponent.postsData;
                    
//                     return (<MyPosts
//                         newPost={newPost}
//                         updateText={updateText}
//                         postsData={postsData}
//                     />);
//                 }
//             }
            
//         </StoreContext.Consumer>

//     );
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.profileComponent.postsData
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (newPostText) => {
      dispatch(newPostActionCreate(newPostText));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;