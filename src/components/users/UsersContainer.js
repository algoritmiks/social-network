import React from 'react';
import { connect } from 'react-redux';

//redux
import {
  setFollow, setUnfollow, followingChange, getUsers
} from '../../redux/usersReducer';

//components
import Users from './Users';
import Preloader from '../common/preloader/preloader'




class UsersAPIComponent extends React.Component {

  // constructor(props) { //You shouldn't use this bind, if you use arrow function
  //   super(props);
  //   this.pageChanged = this.pageChanged.bind(this);
  // }

  componentDidMount(props) {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  };


  pageChanged = (pageNum) => {   //You should use arrow function here, or use bind in constructor
    const {pageSize} = this.props;
    this.props.getUsers(pageNum, pageSize);
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
            followingInProgres={this.props.followingInProgres}
            followingChange = {this.props.followingChange}
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
    isLoading: state.usersComponent.isLoading,
    followingInProgres: state.usersComponent.followingInProgres
  };
};

const UsersContainer = connect(mapStateToProps,
  { setFollow, setUnfollow, followingChange, getUsers })(UsersAPIComponent);


export default UsersContainer;