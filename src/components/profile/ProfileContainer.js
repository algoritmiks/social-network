import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
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


let WithRouterDataProfileContainer = withRouter(ProfileContainer);

export default  connect(mapStateToProps, { setUserProfile })(WithRouterDataProfileContainer);