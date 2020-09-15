import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
// import car from './../img/s1200.jpg';  Как вариант, если пикча лежит не в public/img

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div>
              <img className={css.img_primary} src='/img/content_top.jpg' alt='logo' />
            </div>

            <div>
              <img className={css.img_ava} src={props.profile.photos.large || '/img/ava.png'} alt='avatar' />
            </div>

            <div>
              <p>Full name: {props.profile.fullName}</p>
              <p>Contacts</p>
              <p> github: <a href={props.profile.contacts.github}> {props.profile.contacts.github} </a></p>
            </div>
        </div>
    );
}

export default ProfileInfo;