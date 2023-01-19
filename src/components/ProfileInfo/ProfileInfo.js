import {React} from "react";
import Carousel from 'react-elastic-carousel';
import {RiPencilLine} from 'react-icons/ri';
import NavBar from "../NavBar/NavBar";
import BlogCard from "../BlogCard/BlogCard"
import "./ProfileInfo.css";
import DefaultPhoto from "./DefaultPhoto.jpg"

function ProfileInfo() {

    return (
        <div className="ProfileBody">
            <NavBar/>
            <div className="mainInfo">
                <img src={DefaultPhoto} alt="Profile" id="ProfilePhoto"/>
                <button type="button" onClick={() => alert("Settings page")} className="editBtn">
                    <RiPencilLine className="Icon"/>
                </button>
                <h3 id="UserName">Name</h3>
            </div>
            <Carousel className="blogsContainer">
                <BlogCard/><BlogCard/><BlogCard/><BlogCard/><BlogCard/>
            </Carousel>
        </div>
    );

}
export default ProfileInfo;