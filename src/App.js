// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";




const App = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
    ]

    let messages = [
        {id: 1, message: 'uhuoggi'},
        {id: 2, message: 'hihioh'},
        {id: 3, message: 'ouoi'},
        {id: 4, message: 'Saspkpkpjugha'}
    ]

    let posts = [
        {id: 1, message: 'kjghjg', likesCount: 12},
        {id: 2, message: 'jhgg', likesCount: 10}
    ]
    return (
        <BrowserRouter>

                <div className="app-wrapper">
                    <Header/>
                    <Navbar />

                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages}/>} />
                            <Route path="/profile/*" element={<Profile postsData={posts}/>} />
                        </Routes>
                    </div>
                </div>

        </BrowserRouter>
    );
  }


export default App;
