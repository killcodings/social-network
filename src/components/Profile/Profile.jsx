import React from "react";
// import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://e7.pngegg.com/pngimages/842/713/png-clipart-user-profile-computer-icons-others-miscellaneous-face.png" alt="face"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;