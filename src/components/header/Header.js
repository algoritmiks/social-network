import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => {
    return (
      <header className={css.header}>
        <div>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className={css.login}>
          {props.authorized 
            ? <div> 
                {props.login} - <button onClick={props.logout}>Logout</button>
              </div>
            : <NavLink to="/login">Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;