const ADD_MESSAGE="ADD-MESSAGE";

type MessageType = {
    id: number,
    msg: string
}

type ConversationsType = {
    id: number,
    name: string
}

let initialState = {
    messages: [
        { id: 1, msg: "Hello, there!" },
        { id: 2, msg: "How are you?" },
        { id: 3, msg: "What going on there?" }
    ] as Array<MessageType>,

    conversations: [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Danil" },
        { id: 3, name: "Anna" },
        { id: 4, name: "Aleksei" }
    ] as Array<ConversationsType>,
};

type InitialStateType = typeof initialState;

const dialogsReducer = (state=initialState, action: NewMessageAddActionType): InitialStateType => {
    
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

type NewMessageAddActionType = {
    type: typeof ADD_MESSAGE,
    newMessage: string
}

export const newMessageAdd = (newMessage: string): NewMessageAddActionType => ( {type: ADD_MESSAGE, newMessage: newMessage} );

export default dialogsReducer;