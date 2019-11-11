import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className= {css.nav}>
            <div className={css.item}>
                <a href="http://ya.ru">Profile</a>
            </div>

            <div className={css.item}>
                <a href="ya.ru">Messages</a>
            </div>

            <div className={css.item}>
                <a href="ya.ru">News</a>
            </div>

            <div className={css.item}>
                <a href="ya.ru">Music</a>
            </div>

            <div className={css.item}>
                <a href="ya.ru">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;