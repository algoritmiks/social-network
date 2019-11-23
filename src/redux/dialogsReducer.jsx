const ADD_MESSAGE="ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                msg: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default: 
            return state;
    }
};

export const updateNewMessageTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export const newMessageActionCreate = () => ( {type: ADD_MESSAGE} );

export default dialogsReducer;