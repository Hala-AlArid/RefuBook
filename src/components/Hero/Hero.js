import React from "react";
import "./Hero.css";
import homepage from "../../images/homepage.png";

function Hero (){
    return <div className=" w-full">
    
        <div className="w-4/5 m-auto grid grid-cols-2 pt-28">
        <div className="grid grid-cols-1">
            <h1 className="text-7xl font-black refubook pb-2">Refubook</h1>
            <h2 className="text-6xl font-medium express pb-6 w-60 text-rose-300">Express Freely</h2>
            <p className="text-base font-light w-80">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
            <div className="button w-36 bg-sky-600 rounded-3xl mt-8 mb-10	"><p className="text-xl font-bold py-2 text-white text-center">Sign up</p></div>
        </div>
        <div>
            <img src={homepage} alt="home page graphic"/>
        </div>
        </div>
    </div>
};

export default Hero;