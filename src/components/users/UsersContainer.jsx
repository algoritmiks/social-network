import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        setUnfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;