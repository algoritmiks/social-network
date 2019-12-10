import UsersAPIComponent from './UsersAPIComponent';
import { followActionCreator, unfollowActionCreator, setUsers, setCurrentPage, setTotalUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users,
        pageSize: state.usersComponent.pageSize,
        totalUsers: state.usersComponent.totalUsers,
        currentPage: state.usersComponent.currentPage
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
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setTotalUsers(totalUsers));
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPage(pageNum));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;