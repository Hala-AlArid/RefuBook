import React from "react";
import "./BlogCard.css"
import DefaultPhoto from "../ProfileInfo/DefaultPhoto.jpg"

function BlogCard() {
    return (
        <button className='card' type="button">
            <h3><b>Title 1</b></h3>
            <h3>example</h3>
            <div className="userinfo">
                <img className="profileImg" src={DefaultPhoto} alt="profile pic"/>
                <h3 className="userName">username</h3>
            </div>
        </button>
    );
}

export default BlogCard;