import React from 'react';
import css from './ProfileInfo.module.css';
// import car from './../img/s1200.jpg';  Как вариант, если пикча лежит не в public/img

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                {/* <img src={car} alt = "asdf"/> */}
                <img className={css.img_primary} src='/img/content_top.jpg' alt='logo' />
            </div>

            <div>
                <img className={css.img_ava} src='/img/ava.png' alt='avatar' />
            </div>
        </div>
    );
}

export default ProfileInfo;