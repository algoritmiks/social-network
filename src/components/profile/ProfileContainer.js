import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {compose} from "redux";

import Profile from './Profile';
import { getUsersProfile, getUserStatus, updateUserStatus, uploadPhoto, saveProfileData } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.selfUserId;
      if (!userId) {
            this.props.history.push('/login');
        }
    }
    this.props.getUsersProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.profile,
        userStatus: state.profileComponent.userStatus,
        selfUserId: state.auth.id,
        authorized: state.auth.authorized
    };
};

export default compose(
  connect(mapStateToProps, { getUsersProfile, getUserStatus, updateUserStatus, uploadPhoto, saveProfileData }),
  withRouter,
  withAuthRedirect)(ProfileContainer)