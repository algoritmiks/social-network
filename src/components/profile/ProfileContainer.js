import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {compose} from "redux";

import Profile from './Profile';
import { getUsersProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userID;
    if (!userId) {
      userId = this.props.selfUserId;
    }
    this.props.getUsersProfile(userId);
    this.props.getUserStatus(userId);
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
  connect(mapStateToProps, { getUsersProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect)(ProfileContainer)