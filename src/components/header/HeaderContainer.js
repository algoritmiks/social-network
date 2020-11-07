import React from 'react';
import Header from './Header';
import { setAuthData } from '../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.setAuthData();
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

export default connect(mapStateToProps,  { setAuthData })(HeaderContainer);