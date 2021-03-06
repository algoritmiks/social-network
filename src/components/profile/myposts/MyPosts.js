import React from 'react';
import { reduxForm, Field } from 'redux-form';
import css from './MyPosts.module.css';

import Post from './post/Post';
import {requiredField, checkMaxLength} from '../../../helpers/validators/validator';
import { Textarea } from '../../common/formsControls/FormsControls';


const MyPosts = React.memo((props) => {
    let postsArray = props.postsData.map( (post, ind) => <Post msg={post.post} key={ind} likes={post.likes} /> );

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
  })

// class MyPosts extends React.PureComponent{  //You should use shouldComponentUpdate() or PureComponent
//   // shouldComponentUpdate(nextProps, nextStat) {
//   //   return this.props !== nextProps
//   // }

//   postsArray = this.props.postsData.map( (post, ind) => <Post msg={post.post} key={ind} likes={post.likes} /> );

//   addPost = (values) => {
//       this.props.newPost(values.newPostText);
//   };
  
//   render() {
//     return (
//         <div className={css.myPostsBlock}>
//             <h3>My posts</h3>
//             <ReduxAddNewPostForm onSubmit={this.addPost}/>
//             { this.postsArray }
//         </div>
//     );
//   }
// }
  
  const maxLengthCreator = checkMaxLength(10);
  
  const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} 
          placeholder="enter your post here" 
          name="newPostText" 
          validate={[requiredField, maxLengthCreator]} 
        />
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