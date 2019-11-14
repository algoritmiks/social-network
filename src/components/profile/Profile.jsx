import React from 'react';
import css from './Profile.module.css';
import MyPosts from './myposts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}


export default Profile;