import React from 'react';
import css from './Profile.module.css';
import MyPosts from './myposts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}
                addPost={props.addPost}/>
        </div>
    );
}


export default Profile;