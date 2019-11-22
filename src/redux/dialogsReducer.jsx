const ADD_MESSAGE="ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT="UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

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