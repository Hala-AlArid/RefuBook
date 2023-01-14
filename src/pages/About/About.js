import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Testemonials from "../../components/Testimonials/Testimonials";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

function About(){
    return (
        <div className="About flex flex-col gap-8">
            <header className="about-header">
            <NavBar/>
            </header>
            <container className="story m-12">
                <h1 className="text-5xl"><b>Our Story</b></h1>
                <p className="w-2/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur illo perferendis recusandae harum repellat nostrum voluptates, porro reiciendis, cumque quibusdam iste iure nobis asperiores debitis nihil esse, facere odio possimus?</p>
            </container>
            <container className="team">
                <h1 className="text-5xl"><b>Our Team</b></h1>
                <div className="team-btns mb-16 list-none">
                <button type="submit"><b>View All</b></button>
                <button type="submit"><b>USA</b></button>
                <button type="submit"><b>Turkey</b></button>
                <button type="submit"><b>Lebanon</b></button>
                </div>
                <div className="team-members flex justify-center items-center flex-wrap gap-32">
                    <Team/>
                </div>
            </container>
            <Testemonials/>
            <Partners/>
            <container className="call-to-action">
                {/* icon */}
                <h1>Share your story, help others and get help from others</h1>
                <p className="w-2/4">But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maverick, 
                    a social network that connects young girls with female mentors to express their creativity in a safe space.</p>
                    <NavLink to="/signup"><button type="submit" className="Footer_Buttons sm:w-28 md:w-32 text-center text-white p-1 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
            </container>
            <Footer/>
        </div>
    );
}

export default About;