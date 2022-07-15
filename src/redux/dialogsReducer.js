const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Bekzhan'},
        {id: 2, name: 'Adel'},
        {id: 3, name: 'Sanzhar'},
        {id: 4, name: 'Emir'},
        {id: 5, name: 'Amir'}
    ],
    messages: [
        {id: 1, message: "Hello my friend!"},
        {id: 2, message: "How you're doing?"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "What the hell was that?"}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
);

export default dialogsReducer;