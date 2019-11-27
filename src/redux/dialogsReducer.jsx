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
            {  //фигурная скобка чтобы ограничить область видимости для stateUpdate
            let stateUpdate = {...state};
            stateUpdate.newMessageText = {...state.newMessageText}
            stateUpdate.newMessageText = action.text;
            return stateUpdate;
        }
        case ADD_MESSAGE: 
        { //фигурная скобка чтобы ограничить область видимости для stateUpdate
            let newMessage = {
                id: 1,
                msg: state.newMessageText
            }
            let stateUpdate = {...state};
            stateUpdate.messages = [...state.messages];
            stateUpdate.messages.push(newMessage);
            stateUpdate.newMessageText = '';
            return stateUpdate;
        }
        default: 
            return state;
        
    }
};

export const updateNewMessageTextActionCreate = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export const newMessageActionCreate = () => ( {type: ADD_MESSAGE} );

export default dialogsReducer;