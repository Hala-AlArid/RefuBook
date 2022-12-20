import React from "react";
import './Footer.css';
import logo from './logo.svg'

function Footer(){
    return(
    <div className="FooterDiv">
        <img className="Logo" src={logo} alt="logo"/>
        <div className="Footer_Headings">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Blog</h3>
        </div>
        <div className="Footer_Buttons">
            <button className="SignUpButton" type="button" >Sign Up</button>
            <div className="LanguagesList">            
            <select className="LanguagesSelector">
                <option>English</option>
                <option>Arabic</option>
            </select>
            </div>
        </div>
    </div>)
}
export default Footer