import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { ProfileType, PostDataType, PhotosType } from '../types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

let initialState = {
    postsData: [
        { id: 1, post: "Hi there! How are you?", likes: 5 },
        { id: 2, post: "I'm going to hard work!", likes: 100 }
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    userStatus: ''
};

type StateType = typeof initialState;

const profileReducer = (state=initialState, action: ActionCombinedType): StateType => {
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
            return {...state, profile: {...state.profile, photos: action.photos } as ProfileType}
        default: 
            return state                
    }
}

type ActionCombinedType = NewPostActionType | SetUserProfileActionType | SetUserStatusActionType | SetUserPhotosActionType;
    
type NewPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const newPostActionCreate = (newPostText: string): NewPostActionType => ( {type: ADD_POST, newPostText} );


type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    userProfile: ProfileType
}
const setUserProfile = (userProfile: ProfileType): SetUserProfileActionType => ( {type: SET_USER_PROFILE, userProfile} );

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    userStatus: string
}
const setUserStatus = (userStatus: string): SetUserStatusActionType => ({type: SET_USER_STATUS, userStatus: userStatus});

type SetUserPhotosActionType = {
    type: typeof SET_USER_PHOTOS,
    photos: PhotosType
}
const setUserPhotos = (photos: PhotosType): SetUserPhotosActionType => ({type: SET_USER_PHOTOS, photos});

export const getUsersProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getUsersProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (userStatus: string) => async (dispatch: any) => {
    const response = await profileAPI.updateUserStatus(userStatus);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
    }
}

export const uploadPhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.uploadPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setUserPhotos(response.data.data.photos));
    }
}


export const saveProfileData = (formData: any) => async (dispatch: any, getState: any) => {
    const response = await profileAPI.saveProfileData(formData);
    if (response.data.resultCode === 0) {
        const userId = getState().auth.id;
        dispatch(getUsersProfile(userId));
    } else {
        dispatch(stopSubmit("profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}
export default profileReducer;