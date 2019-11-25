import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './myposts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={ props.store } />
        </div>
    );
}


export default Profile;