import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.imgProfileInfo} src="https://e7.pngegg.com/pngimages/842/713/png-clipart-user-profile-computer-icons-others-miscellaneous-face.png" alt="face"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;