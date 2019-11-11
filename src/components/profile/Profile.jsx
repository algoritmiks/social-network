import React from 'react';
import css from './Profile.module.css';
import MyPosts from './myposts/MyPosts';
// import car from './../img/s1200.jpg';  Как вариант, если пикча лежит не в public/img

const Profile = () => {
    return (
        <div>
            <div>
                {/* <img src={car} alt = "asdf"/> */}
                <img className={css.img_primary} src='/img/content_top.jpg' alt='logo'/>
            </div>

            <div>
                <img src='/img/ava.png' alt='avatar'/>
            </div>

            <MyPosts />
            
        </div>
    );
}


export default Profile;