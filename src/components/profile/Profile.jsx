import React from 'react';
import css from './Profile.module.css';
import MyPosts from './myposts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}


export default Profile;