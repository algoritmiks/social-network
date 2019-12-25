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
                    {/* <img className={css.img_ava} src='/img/ava.png' alt='avatar' /> */}
                    <img className={css.img_ava} src={props.profile.photos.large} alt='avatar' />
            </div>
        </div>
    );
}

export default ProfileInfo;