import React from "react";
import "./Partners.css";
import carousel from "../../images/carousel.png"

function Partners (){
    return <div className="m-auto">
        <h3 className="text-center text-2xl	font-medium font-bold py-6">Our Partners</h3>
        <div className="grid grid-cols-8 gap-x-1 pt-4 m-auto justify-center pl-5">
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel'/>
            <img src={carousel} alt='carousel' />
        </div>
        <div className="w-16 m-auto pt-8 grid grid-cols-4 gap-0 justify-items-center place-content-center">
            <div className="rounded-full bg-sky-700 w-2 h-2"/>
            <div className="rounded-full bg-gray-300 w-2 h-2"/>
            <div className="rounded-full bg-gray-300 w-2 h-2"/>
            <div className="rounded-full bg-gray-300 w-2 h-2"/>
        </div>
    </div>
};

export default Partners;