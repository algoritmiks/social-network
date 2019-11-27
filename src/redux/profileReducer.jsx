const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, post: "Hi there! How are you?", likes: 5 },
        { id: 2, post: "I'm going to hard work!", likes: 100 }
    ],
    newPostText: ''
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            {   //фигурная скобка чтобы ограничить область видимости для stateUpdate
                let newPost = {
                    id: 3,
                    post: state.newPostText,
                    likes: 0
                }
                let stateUpdate = {...state};
                stateUpdate.postsData = [...state.postsData];
                stateUpdate.postsData.push(newPost);
                stateUpdate.newPostText = '';
                return stateUpdate;
            }
        case UPDATE_NEW_POST_TEXT:
            {   //фигурная скобка чтобы ограничить область видимости для stateUpdate
                let stateUpdate = {...state};
                stateUpdate.newPostText = action.text;
                return stateUpdate;
            }
        default: 
            return state                
    }
}

export const updateNewPostTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
    
export const newPostActionCreate = () => ( {type: ADD_POST} );

export default profileReducer;