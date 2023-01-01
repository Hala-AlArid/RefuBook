import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import homepage from "../../images/homepage.png";

function Hero (){
    return <div className=" w-full">
    
        <div className="w-4/5 m-auto grid grid-cols-2 pt-28">
        <div className="grid grid-cols-1">
            <h1 className="text-7xl font-black refubook pb-2">Refubook</h1>
            <h2 className="text-6xl font-medium express pb-6 w-60 text-rose-300">Express Freely</h2>
            <p className="text-base font-light w-80">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
           
            <NavLink to="/signup"><button type="submit" className="button sm:w-28 md:w-32 text-center text-xl font-bold text-white py-2 px-6 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
        </div>
        <div>
            <img src={homepage} alt="home page graphic"/>
        </div>
        </div>
    </div>
};

export default Hero;