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

            <ProfileData {...props}/>
            
        </div>
        
    );
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <p><b>Full name: </b>{props.profile.fullName}</p>
            </div>

            <div>
                <b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>

            {props.profile.lookingForAJob &&
                <div>
                    Job decription: {props.profile.lookingForAJobDescription}
                </div>
            }

            <div>
                <p><b>Contacts:</b></p>

                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact description = {key}
                                    value = {props.profile.contacts[key]} 
                                    key = {key} />
                })}
            </div>
        </div>
    )
}

const Contact = ({description, value}) => {
    return (
        <div>
            <p className = {css.contacts}><b>{description}:</b> {value} </p>
        </div>
    )
}

export default ProfileInfo;