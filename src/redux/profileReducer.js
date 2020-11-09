import { usersAPI, profileAPI } from '../api/api';

const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_USER_STATUS='SET_USER_STATUS';

let initialState = {
    postsData: [
        { id: 1, post: "Hi there! How are you?", likes: 5 },
        { id: 2, post: "I'm going to hard work!", likes: 100 }
    ],
    newPostText: '',
    profile: null,
    userStatus: ''
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
                let newPost = {
                    id: 3,
                    post: state.newPostText,
                    likes: 0
                }
                return {...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.text }
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile }            
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus }  
        default: 
            return state                
    }
}

export const updateNewPostTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
    
export const newPostActionCreate = () => ( {type: ADD_POST} );

const setUserProfile = (userProfile) => ( {type: SET_USER_PROFILE, userProfile: userProfile} );

const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus: userStatus});

export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getUsersProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data));
    });
}

export const updateUserStatus = (userStatus) => (dispatch) => {
  profileAPI.updateUserStatus(userStatus)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
      }
    });
}

export default profileReducer;