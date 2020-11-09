import React from 'react';
// import css from './Profile.module.css';
import MyPostsContainer from './myposts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo 
              profile = {props.profile}
              userStatus = {props.userStatus}
              updateUserStatus = {props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;