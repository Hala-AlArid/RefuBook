import React from "react";
import Refubook from "../../images/Refubook.png";
import Small from "../../images/Small.png";
import "./NavBar.css"


function NavBar (){
    return <div className="w-full h-8">
        <nav className="w-11/12 grid grid-cols-2 m-auto pt-9 flex items-stretch items-center place-content-between content-center">
            <div className="grid grid-cols-2 gap-x-0 flex justify-self-start">
                <img className="px-4 justify-self-end" src={Small} alt='logo'/>
                <img className="p-0 justify-self-start" src={Refubook} alt='logo'/>
            </div>
            <div className="justify-self-end grid grid-cols-5 gap-x-3  content-center items-center">
                <div className="text-sky-600 font-semibold">Home</div>
                <div className="text-slate-400">About</div>
                <div className="text-slate-400">Blog</div>
                <div className="text-slate-400">Contact</div>
                <div className="button py-2 px-6 flex items-center rounded-full bg-sky-600">
                    <p className="text-center self-center text-white font-bold">Sign Up</p>
                 </div>
            </div>
        </nav>
    </div>
};

export default NavBar;