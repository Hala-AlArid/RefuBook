import React from "react";
import { NavLink } from "react-router-dom";
import Refubook from "../../images/Refubook.png";
import Small from "../../images/Small.png";
import "./NavBar.css"



function NavBar (){
    return <div className="w-full h-8">
        <nav className="w-11/12 grid grid-cols-2  pt-9 flex items-center place-content-between content-center">
            <div className="grid grid-cols-2 gap-x-0 flex justify-self-start">
                <img className="px-4 justify-self-end" src={Small} alt='logo'/>
                <img className="p-0 justify-self-start" src={Refubook} alt='logo'/>
            </div>
            <div className="justify-self-end grid grid-cols-5 gap-x-3  content-center items-center">
                <NavLink exact="true" to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Home</NavLink>
                <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>About</NavLink>
                <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Blog</NavLink>
                <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Contact</NavLink>
                <i className="md:hidden "/>
                <NavLink to="/signup"><button type="submit" className="button sm:w-28 md:w-32 text-center text-white py-2 px-6 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
            </div>
        </nav>
    </div>
};

export default NavBar;