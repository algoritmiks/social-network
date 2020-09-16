import React from 'react';
import Header from './Header';
// import Preloader from '../common/preloader/preloader'
import { setUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if (!response.data.resultCode) {
              const {id, login, email} = response.data.data;
              this.props.setUserData(id, login, email);
            }
        });
    };

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        authorized: state.auth.authorized
    };
};

const UsersContainer = connect(mapStateToProps,  { setUserData })(HeaderContainer);

export default UsersContainer;