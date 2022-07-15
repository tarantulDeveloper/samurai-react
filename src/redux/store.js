import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "How you're doing?", likesCount: 3}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

    setState(state) {
        this._state = state;
    }

}






export default store;
window.store = store;