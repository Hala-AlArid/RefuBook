import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css"
import homepage from "../../images/homepage.png";
import NavBar from "../../components/NavBar/NavBar";

function Hero (){

    return(
    <div className="bg-[#70CDD6] md:pt-6 md:p-6 md:pr-12 md:pl-12 p-2">
        
        <div className="md:h-full bg-white flex flex-col gap-2 justify-center items-center shadow-2xl shadow-gray-500 rounded-3xl md:p-6">

        <NavBar/> 

        <div className="flex md:flex-row flex-col-reverse justify-center gap-2">
            
        <div className="flex flex-col md:items-start justify-center gap-2 md:text-start text-center m-auto md:mt-0">
            <h1 className="md:text-7xl text-3xl font-black refubook">Refubook</h1>
            <h2 className="md:text-6xl md:w-[80%] text-2xl font-medium express text-rose-300 md:mb-2">Express Freely</h2>
            <p id="herotext" className="text-bold text-sm m-2 md:w-[50%]">Refubook will help you find your way through a new country.</p>
            
           
            <NavLink to="/signup"><button type="submit" className="button mb-4 sm:w-28 md:w-32 text-center md:text-xl font-bold text-white py-2 px-6 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
        </div>

        <div>
            <img className="md:w-[80%] w-[50%] m-auto" src={homepage} alt="home page graphic"/>
        </div>

        </div>
        </div>
    </div>
    )
};

export default Hero;