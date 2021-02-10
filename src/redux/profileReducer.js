import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

let initialState = {
    postsData: [
        { id: 1, post: "Hi there! How are you?", likes: 5 },
        { id: 2, post: "I'm going to hard work!", likes: 100 }
    ],
    profile: null,
    userStatus: ''
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
                let newPost = {
                    id: 3,
                    post: action.newPostText,
                    likes: 0
                }
                return {...state,
                    postsData: [...state.postsData, newPost],
                }
        case SET_USER_PROFILE:
            return { ...state, profile: action.userProfile }            
        case SET_USER_STATUS:
            return { ...state, userStatus: action.userStatus }  
        case SET_USER_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.photos }}
        default: 
            return state                
    }
}
    
export const newPostActionCreate = (newPostText) => ( {type: ADD_POST, newPostText} );

const setUserProfile = (userProfile) => ( {type: SET_USER_PROFILE, userProfile} );

const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus: userStatus});

const setUserPhotos = (photos) => ({type: SET_USER_PHOTOS, photos});

export const getUsersProfile = (userId) => async(dispatch) => {
  const response = await usersAPI.getUsersProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async(dispatch) => {
  const response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (userStatus) => async(dispatch) => {
  const response = await profileAPI.updateUserStatus(userStatus);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
}

export const uploadPhoto = (file) => async(dispatch) => {
    const response = await profileAPI.uploadPhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(setUserPhotos(response.data.data.photos));
    }
  }
  

export default profileReducer;