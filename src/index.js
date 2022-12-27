import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import store from "./redux/store";
import store from "./redux/redux-store";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// addPost('fdgfxfggfkhghgdhs');
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App State={state}  /*updateNewPostText={store.updateNewPostText.bind(store)} */ dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
