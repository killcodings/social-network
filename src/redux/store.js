// import {rerenderEntireTree} from "../render";


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'kjghjg', likesCount: 12},
                {id: 2, message: 'jhgg', likesCount: 10}
            ],
            newPostText: 'newPostText из state.js'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'uhuoggi'},
                {id: 2, message: 'hihioh'},
                {id: 3, message: 'ouoi'},
                {id: 4, message: 'Saspkpkpjugha'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State other');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer - паттерн наблюдатель
    },

/*    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
        // console.log(state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}




window.store = store;
export default store;