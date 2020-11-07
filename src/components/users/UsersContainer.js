import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//redux
import {
  setUnfollow, setFollow, followingChange, getUsers
} from '../../redux/usersReducer';

//components
import Users from './Users';
import Preloader from '../common/preloader/preloader'




class UsersAPIComponent extends React.Component {

  // constructor(props) { //You shouldn't use this bind, if you use arrow function
  //   super(props);
  //   this.pageChanged = this.pageChanged.bind(this);
  // }

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  };


  pageChanged = (pageNum) => {   //You should use arrow function here, or use bind in constructor
    const {pageSize} = this.props;
    this.props.getUsers(pageNum, pageSize);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to='/login' />
    }
    return (
      <>
        {this.props.isLoading
          ? <Preloader />
          : <Users totalUsers={this.props.totalUsers}
            pageChanged={this.pageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            setUnfollow={this.props.setUnfollow}
            setFollow={this.props.setFollow}
            pageSize={this.props.pageSize}
            followingInProgres={this.props.followingInProgres}
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
    followingInProgres: state.usersComponent.followingInProgres,
    isAuth: state.auth.authorized
  };
};

const UsersContainer = connect(mapStateToProps,
  { setFollow, setUnfollow, followingChange, getUsers })(UsersAPIComponent);


export default UsersContainer;