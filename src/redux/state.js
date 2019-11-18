let render;

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 3,
        post: state.profileComponent.newPostText,
        likes: 0
    }
    state.profileComponent.postsData.push(newPost);
    state.profileComponent.newPostText='';
    render(state);
};

export const updateNewPostText = (text) => {
    state.profileComponent.newPostText = text;
    render(state);
}

export const subscribe = (observer) => {
    render = observer;
}

export default state;