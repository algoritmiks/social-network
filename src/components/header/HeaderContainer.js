import React from 'react';
import Header from './Header';
import { logout } from '../../redux/authReducer';
import { connect } from 'react-redux';


const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  );
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps,  { logout })(HeaderContainer);