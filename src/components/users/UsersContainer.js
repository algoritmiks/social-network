import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/preloader'
import { setFollow, 
    setUnfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsers, 
    setLoading } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {

  // constructor(props) { //You shouldn't use this bind, if you use arrow function
  //   super(props);
  //   this.pageChanged = this.pageChanged.bind(this);
  // }

    componentDidMount(props) {
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount)
            
        });
    };


    pageChanged = (pageNum) => {   //You should use arrow function here, or use bind in constructor
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

const UsersContainer = connect(mapStateToProps, 
    { setFollow, setUnfollow, setUsers, setTotalUsers, setCurrentPage, setLoading })(UsersAPIComponent);

export default UsersContainer;