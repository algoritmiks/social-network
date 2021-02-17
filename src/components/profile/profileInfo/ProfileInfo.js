import React, {useState} from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ReduxProfileDataForm from './ProfileDataForm';
// import car from './../img/s1200.jpg';  Как вариант, если пикча лежит не в public/img

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    

    if(!props.profile){
        return <Preloader />
    }

    const onUploadImage = (e) => {
        props.uploadPhoto(e.target.files[0]);
    }

    const onSubmitProfileData = (formData) => {
        props.saveProfileData(formData)
            .then(() => setEditMode(false));
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

            { !props.userId && !editMode
                ? <div>
                     <button onClick = { () => setEditMode(true) }>Edit</button>
                  </div>
                : null
            }

            { editMode 
                ? <ReduxProfileDataForm initialValues = {props.profile} profile = {props.profile} onSubmit={ onSubmitProfileData }/> 
                : <ProfileData {...props}/> }
            
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
                <p><b>About me:</b> {props.profile.aboutMe}</p>
            </div>

            <div>
                <p><b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}</p>
            </div>

            {props.profile.lookingForAJob &&
                <div>
                    <p><b>Job decription: </b>{props.profile.lookingForAJobDescription}</p>
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