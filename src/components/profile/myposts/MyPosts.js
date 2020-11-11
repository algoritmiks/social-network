import React from 'react';
import css from './MyPosts.module.css';
import Post from './post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {
    let postsArray = props.profileComponent.postsData.map( post => <Post msg={post.post} key={post.id} likes={post.likes} /> );

    const addPost = (values) => {
        props.newPost(values.newPostText);
    };
    
    return (
        <div className={css.myPostsBlock}>
            <h3>My posts</h3>
            <ReduxAddNewPostForm onSubmit={addPost}/>
            { postsArray }
        </div>
    );
}


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" placeholder="enter your post here" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>
        <button>Delete post</button>
      </div>
    </form>
  )
}


const ReduxAddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;