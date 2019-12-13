import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/preloader'
import { followActionCreator, unfollowActionCreator, setUsers, setCurrentPage, setTotalUsers, setLoading } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {

    componentDidMount(props) {
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
            
        });
    };


    pageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setLoading(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.isLoading
                    ? <Preloader />
                    : <Users totalUsers={this.props.totalUsers}
                        setUsers={this.props.setUsers}
                        pageChanged={this.pageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        setUnfollow={this.props.setUnfollow}
                        setFollow={this.props.setFollow}
                        pageSize={this.props.pageSize}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users,
        pageSize: state.usersComponent.pageSize,
        totalUsers: state.usersComponent.totalUsers,
        currentPage: state.usersComponent.currentPage,
        isFetching: state.usersComponent.isFetching,
        isLoading: state.usersComponent.isLoading
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
        },
        setLoading: (isLoading) => {
            dispatch(setLoading(isLoading));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;