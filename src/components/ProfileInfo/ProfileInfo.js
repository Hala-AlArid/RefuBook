import {React } from "react";
import { RiPencilLine } from 'react-icons/ri';
import NavBar from "../NavBar/NavBar";
import "./ProfileInfo.css";
import DefaultPhoto from "./DefaultPhoto.jpg"

function ProfileInfo(){

    return (
        <div className="ProfileBody">
            <NavBar/>
            <div className="Content">
            <img src={DefaultPhoto} alt="Profile" id="ProfilePhoto"/>

            <button type="button" onClick={() => alert("Settings page")} className="editBtn">
                <RiPencilLine className="Icon"/>
            </button>
            <h3 id="UserName">Name</h3>
        </div>
        </div>
      );
}
export default ProfileInfo;