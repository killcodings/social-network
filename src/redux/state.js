// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log('State other');
}



let state = {
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
        ]
    }
};

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);


    // console.log(state);
}

window.state = state;

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer - паттерн наблюдатель
}


export default state;