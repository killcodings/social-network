// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/store";



const App = (props) => {

    return (
        <BrowserRouter>

                <div className="app-wrapper">
                    <Header/>
                    <Navbar />

                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/dialogs/*" element={<Dialogs store={props.store} /*state={props.State.dialogsPage} messages={props.State.dialogsPage}*//>} />
                            <Route path="/profile/*" element={<Profile
                                profilePage={props.State.profilePage}
                                dispatch={props.dispatch}
                                // updateNewPostText={props.updateNewPostText}
                                />}
                            />
                        </Routes>
                    </div>
                </div>

        </BrowserRouter>
    );
  }


export default App;
