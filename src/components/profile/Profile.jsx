import React from 'react';
import css from './Profile.module.css';
import MyPosts from './myposts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profileComponent.postsData}
                newPostText={props.profileComponent.newPostText}
                dispatch={ props.dispatch } />
        </div>
    );
}


export default Profile;