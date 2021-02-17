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
              userId = {props.match.params.userId}
              uploadPhoto = {props.uploadPhoto}
              saveProfileData = {props.saveProfileData}
            />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;