let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'kjghjg', likesCount: 12},
            {id: 2, message: 'jhgg', likesCount: 10}
        ]
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

export  let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    console.log(state);
}

export default state;