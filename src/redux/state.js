import {render} from './../render';

let state = {
    profileComponent: {
        postsData: [
            { id: 1, post: "Hi there! How are you?", likes: 5 },
            { id: 2, post: "I'm going to hard work!", likes: 100 }
        ]
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

export let addPost = (post) => {
    let newPost = {
        id: 3,
        post: post,
        likes: 0
    }
    state.profileComponent.postsData.push(newPost);
    render(state);
};

export default state;