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
        }
    },

    getState() { return this._state },

    addPost() {
        let newPost = {
            id: 3,
            post: this._state.profileComponent.newPostText,
            likes: 0
        }
        this._state.profileComponent.postsData.push(newPost);
        this._state.profileComponent.newPostText='';
        this._callSubscriber(this._state);
    },

    updateNewPostText(text) {
        debugger;
        this._state.profileComponent.newPostText = text;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;