import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from './redux/store';


// addPost('fdgfxfggfkhghgdhs');
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App State={state} updateNewPostText={updateNewPostText} addPost={addPost} />
        </React.StrictMode>
    );
}