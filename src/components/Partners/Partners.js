
import React from "react";
import "./Partners.css";
import Carousel from "react-elastic-carousel";
import Partner from "./Partner";

function Partners (){
    return <div>
        <h3 className="text-center text-2xl	font-medium font-bold py-6">Our Partners</h3>
        <Carousel showArrows={false} enableAutoPlay className="">
            <Partner/>
            <Partner/>
        </Carousel>

    </div>
};

export default Partners;

