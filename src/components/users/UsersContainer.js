//components
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/preloader'

//reducers and other functions
import {
  setFollow,
  setUnfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setLoading
} from '../../redux/usersReducer';
import { getUsers } from '../../api/api';

//dlls
import { connect } from 'react-redux';


class UsersAPIComponent extends React.Component {

  // constructor(props) { //You shouldn't use this bind, if you use arrow function
  //   super(props);
  //   this.pageChanged = this.pageChanged.bind(this);
  // }

  componentDidMount(props) {
    this.props.setLoading(true);

    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setLoading(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount)
      });
  };


  pageChanged = (pageNum) => {   //You should use arrow function here, or use bind in constructor
    this.props.setCurrentPage(pageNum);
    this.props.setLoading(true);
    getUsers(pageNum, this.props.pageSize).then(data => {
        this.props.setLoading(false);
        this.props.setUsers(data.items);
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
    isLoading: state.usersComponent.isLoading
  };
};

const UsersContainer = connect(mapStateToProps,
  { setFollow, setUnfollow, setUsers, setTotalUsers, setCurrentPage, setLoading })(UsersAPIComponent);

export default UsersContainer;