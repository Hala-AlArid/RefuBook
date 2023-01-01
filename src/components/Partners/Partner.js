import React from "react";
import carousel from "../../images/carousel.png";

function Partner(){
    return (
        <div className="flex justify-center flex-wrap flex-row gap-6">
        <img src={carousel} alt='carousel'/>
        <img src={carousel} alt='carousel'/>
        <img src={carousel} alt='carousel'/>
        <img src={carousel} alt='carousel'/>
        <img src={carousel} alt='carousel'/>
        <img src={carousel} alt='carousel'/>
    </div>
    );
}

export default Partner;