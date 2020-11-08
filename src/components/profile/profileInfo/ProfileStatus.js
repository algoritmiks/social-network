import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  toggleStatus = (status) => {
    this.setState({
      editMode: status
    })
  } 


  render() {
    return (
      <div>
          {(!this.state.editMode && 
          <div>
            <span onDoubleClick = { () => this.toggleStatus(true) }>{this.props.status}</span>
          </div>)
          ||
          <div>
            <input autoFocus={true} onBlur={ () => this.toggleStatus(false) } value={this.props.status} />
          </div>
          }
      </div>
    )
  }
};
  
  export default ProfileStatus