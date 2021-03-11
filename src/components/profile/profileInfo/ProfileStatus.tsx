import React, {useState, useEffect, ChangeEvent} from 'react';


type PropsType = {
    userStatus: string
    userId: number
    updateUserStatus: (userStatus: string) => void
}

const ProfileStatus = (props: PropsType) => {
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);


  useEffect( () => {
    setUserStatus(props.userStatus);
  }, [props.userStatus]);


  const toggleUserStatus = (mode: boolean) => {
    if (!props.userId) {
        setEditMode(mode);
    }
  } 

  const changeUserStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setUserStatus(e.currentTarget.value)
  }

  const updateUserStatus = (editMode: boolean) => {
    toggleUserStatus(editMode);
    props.updateUserStatus(userStatus);
  }


    return (
      <div>
          {(!editMode && 
          <div>
          <span><b>User status: </b></span><span onDoubleClick = { () => toggleUserStatus(true) }>{props.userStatus || 'No status'}</span>
          </div>)
          ||
          <div>
          <span><b>User status: </b></span><input onChange={changeUserStatus} autoFocus={true} onBlur={ () => updateUserStatus(false) } value={userStatus} />
          </div>
          }
      </div>
    )
};
  
  export default ProfileStatus