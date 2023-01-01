import React from 'react';
import Carousel from 'react-elastic-carousel';
import Testimonial from "./Testimonial";
import WorldMap from "../../images/world_map1.jpg"

function Testimonials(){
    return (
        <div className="flex md:flex-row flex-col justify-center items-center">
            <div>
                <img src={WorldMap}  alt="WorldMap"/>
            </div>
            <div className="flex w-1/2">
            <Carousel showArrows={false} enableAutoPlay className="flex justify-center">
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
            </Carousel>
            </div>
        </div>
    )
}
export default Testimonials;