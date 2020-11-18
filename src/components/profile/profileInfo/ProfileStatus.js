import React, {useState} from 'react';


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);


  const toggleUserStatus = (mode) => {
    setEditMode(mode);
  } 

  const changeUserStatus = (e) => {
    setUserStatus(e.currentTarget.value)
  }

  const updateUserStatus = (editMode) => {
    toggleUserStatus(editMode);
    props.updateUserStatus(userStatus);
  }


    return (
      <div>
          {(!editMode && 
          <div>
            <span onDoubleClick = { () => toggleUserStatus(true) }>{props.userStatus || 'No status'}</span>
          </div>)
          ||
          <div>
            <input onChange={changeUserStatus} autoFocus={true} onBlur={ () => updateUserStatus(false) } value={userStatus} />
          </div>
          }
      </div>
    )
};
  
  export default ProfileStatus