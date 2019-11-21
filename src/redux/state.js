const ADD_POST="ADD-POST";
const ADD_MESSAGE="ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";

let store = {

    _callSubscriber() {console.log('render func')},

    _state: {
        profileComponent: {
            postsData: [
                { id: 1, post: "Hi there! How are you?", likes: 5 },
                { id: 2, post: "I'm going to hard work!", likes: 100 }
            ],
            newPostText: ''
        },
    
        dialogsComponent: {
            messages: [
                { id: 1, msg: "Hello, there!" },
                { id: 2, msg: "How are you?" },
                { id: 3, msg: "What going on there?" }
            ],
            conversations: [
                { id: 1, name: "Sveta" },
                { id: 2, name: "Danil" },
                { id: 3, name: "Anna" },
                { id: 4, name: "Aleksei" }
            ],
            newMessageText: ''
        }
    },

    getState() { return this._state },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                post: this._state.profileComponent.newPostText,
                likes: 0
            }
            this._state.profileComponent.postsData.push(newPost);
            this._state.profileComponent.newPostText='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileComponent.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            debugger;
            this._state.dialogsComponent.newMessageText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 1,
                msg: this._state.dialogsComponent.newMessageText
            }
            this._state.dialogsComponent.messages.push(newMessage);
            this._state.dialogsComponent.newMessageText='';
            this._callSubscriber(this._state);
        }
    }
};

export const updateNewPostTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
    
export const newPostActionCreate = () => ( {type: ADD_POST} );

export const updateNewMessageTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export const newMessageActionCreate = () => ( {type: ADD_MESSAGE} );

window.store = store;

export default store;