import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus
  }

  toggleUserStatus = (editMode) => {
    this.setState({
      editMode: editMode
    })
  } 

  updateUserStatus = (editMode) => {
    this.toggleUserStatus(editMode);
    this.props.updateUserStatus(this.state.userStatus);
  }

  changeUserStatus = (e) => {
    this.setState({
      userStatus: e.currentTarget.value
    });
  }

  componentDidUpdate = (previousProps, previousState) => {
    if (previousProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus
      })
    }
  }

  render() {
    return (
      <div>
          {(!this.state.editMode && 
          <div>
            <span onDoubleClick = { () => this.toggleUserStatus(true) }>{this.props.userStatus || 'No status'}</span>
          </div>)
          ||
          <div>
            <input onChange={this.changeUserStatus} autoFocus={true} onBlur={ () => this.updateUserStatus(false) } value={this.state.userStatus} />
          </div>
          }
      </div>
    )
  }
};
  
  export default ProfileStatus