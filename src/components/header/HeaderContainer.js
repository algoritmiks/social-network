import React from 'react';
import Header from './Header';
// import Preloader from '../common/preloader/preloader'
import { setUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { getAuth } from '../../api/api';


class HeaderContainer extends React.Component {
    componentDidMount() {
      getAuth()
        .then(data => {
            if (!data.resultCode) {
              const {id, login, email} = data.data;
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