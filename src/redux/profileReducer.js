const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";

let initialState = {
    postsData: [
        { id: 1, post: "Hi there! How are you?", likes: 5 },
        { id: 2, post: "I'm going to hard work!", likes: 100 }
    ],
    newPostText: '',
    profile: null
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
        default: 
            return state                
    }
}

export const updateNewPostTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
    
export const newPostActionCreate = () => ( {type: ADD_POST} );

export const setUserProfile = (userProfile) => ( {type: SET_USER_PROFILE, userProfile: userProfile} );

export default profileReducer;