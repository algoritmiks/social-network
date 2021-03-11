import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

import Users from './Users';
import Preloader from '../common/preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { setUnfollow, setFollow, getUsers } from '../../redux/usersReducer';
import { getUsersFromState, getPageSizeFromState, getTotalUsersFromState,
        getCurrentPageFromState, getIsLoadingFromState, getFollowingInProgresFromState } from '../../redux/usersSelectors';
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/reduxStore';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsers: number
    currentPage: number
    isLoading: boolean
    followingInProgres: Array<number>
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    setUnfollow: (userId: number) => void
    setFollow: (userId: number) => void
}

type OwnPropsType = {
    pageChanged: (pageNum: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {

  // constructor(props) { //You shouldn't use this bind, if you use arrow function
  //   super(props);
  //   this.pageChanged = this.pageChanged.bind(this);
  // }

  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  };


  pageChanged = (pageNum: number) => {   //You should use arrow function here, or use bind in constructor
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>( mapStateToProps, {setFollow, setUnfollow, getUsers} ),
    withAuthRedirect
)(UsersAPIComponent)