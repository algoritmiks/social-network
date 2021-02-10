import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
// import car from './../img/s1200.jpg';  Как вариант, если пикча лежит не в public/img

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    const onUploadImage = (e) => {
        props.uploadPhoto(e.target.files[0]);
    }

    return (
        <div>
            <div>
              <img className={css.img_primary} src='/img/content_top.jpg' alt='logo' />
            </div>

            <div>
              <img className={css.img_ava} src={props.profile.photos.large || '/img/ava.png'} alt='avatar' />
            </div>

            <div className={css.upload_file}>
                { !props.userId ? <input type={"file"} onChange={onUploadImage}/> : null}
            </div>

            <div>
              <ProfileStatus 
                userStatus = {props.userStatus} 
                updateUserStatus = {props.updateUserStatus}  
                userId = {props.userId}
              />
            </div>
            <div>
              <p>Full name: {props.profile.fullName}</p>
              <p>Contacts</p>
              <p>github: <a href={props.profile.contacts.github}> {props.profile.contacts.github} </a></p>
            </div>
        </div>
    );
}

export default ProfileInfo;