import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { getUsersProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }
    this.props.getUsersProfile(userID);
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
        profile: state.profileComponent.profile
    };
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithRouterDataProfileContainer = withRouter(AuthRedirectComponent);

export default  connect(mapStateToProps, { getUsersProfile })(WithRouterDataProfileContainer);