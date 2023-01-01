import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from "../../images/Small.png";

function Footer() {
  return (
    <div className="FooterDiv">
      <img className="Logo" src={logo} alt="logo" />
      <div className="Footer_Headings">
      <NavLink to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Home</NavLink>
                <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>About</NavLink>
                <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Blog</NavLink>
                <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Contact</NavLink>
      </div>
      <div className="Footer_Buttons">
      <NavLink to="/signup"><button type="submit" className="Footer_Buttons sm:w-28 md:w-32 text-center text-white p-1 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
        <div className="LanguagesList">
          <select className="LanguagesSelector">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>
    </div>
  ); 
}
export default Footer;