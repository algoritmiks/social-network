const ADD_MESSAGE="ADD-MESSAGE";

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
        case ADD_MESSAGE: 
            let newMessage = {
                id: 1,
                msg: action.newMessage
            };
            return {...state,
                messages: [...state.messages, newMessage]
            };
        default: 
            return state;
        
    }
};

export const newMessageAdd = (newMessage) => ( {type: ADD_MESSAGE, newMessage: newMessage} );

export default dialogsReducer;