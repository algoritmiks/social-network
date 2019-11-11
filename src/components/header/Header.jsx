import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src="/img/logo.png" alt="logo"/>
        </header>
    );
}

export default Header;