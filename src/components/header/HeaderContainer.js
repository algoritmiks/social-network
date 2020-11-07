import React from 'react';
import Header from './Header';
import { getAuthData } from '../../redux/authReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthData();
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

export default connect(mapStateToProps,  { getAuthData })(HeaderContainer);