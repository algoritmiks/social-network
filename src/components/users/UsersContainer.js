import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

import Users from './Users';
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { setUnfollow, setFollow, followingChange, getUsers } from '../../redux/usersReducer';
import { getUsersFromState, getPageSizeFromState, getTotalUsersFromState,
        getCurrentPageFromState, getIsLoadingFromState, getFollowingInProgresFromState } from '../../redux/usersSelectors';


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
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}

          <Users totalUsers={this.props.totalUsers}
            pageChanged={this.pageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            setUnfollow={this.props.setUnfollow}
            setFollow={this.props.setFollow}
            pageSize={this.props.pageSize}
            followingInProgres={this.props.followingInProgres}
          />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersFromState(state),
    pageSize: getPageSizeFromState(state),
    totalUsers: getTotalUsersFromState(state),
    currentPage: getCurrentPageFromState(state),
    isLoading: getIsLoadingFromState(state),
    followingInProgres: getFollowingInProgresFromState(state),
  };
};

export default compose(
  connect( mapStateToProps, {setFollow, setUnfollow, followingChange, getUsers} ),
  withAuthRedirect
)(UsersAPIComponent)