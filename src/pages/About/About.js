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
                <p className="our w-2/4">RefuBook is inspired by the many stories of refugees who found themselves lost when arriving to a new place. Our mission is to create a safe, welcoming and loving environment for all.
                
                Here in RefuBook, you can find answers to all of your questions and get help from other refugees who might experienced similar circumstances.</p>
            </container>
            <container className="team p-16">
                <h1 className="md:text-5xl text-3xl"><b>Our Team</b></h1>
                <h3 className="md:text-xl text-sky-700">Meet the amazing team behind RefuBook!</h3>
                {/* <div className="team-btns mb-16 list-none">
                <button type="submit"><b>View All</b></button>
                <button type="submit"><b>USA</b></button>
                <button type="submit"><b>Turkey</b></button>
                <button type="submit"><b>Lebanon</b></button>
                </div> */}
                <div className="team-members flex justify-center items-center flex-wrap gap-32">
                    <Team/> 
                </div>
            </container>
            <Testemonials/>
            <Partners/>
            <container className="call-to-action">
                {/* icon */}
                <h1>Share your story, help others and get help from others</h1>
                <p className="w-2/4">RefuBook provides blogging tools with easy access for all its users. You can easily write your own experience 
                    and help others. RefuBook is a free portal that helps refugees and new arriving members in a new country.</p>
                    <p className="w-2/4">Get Started Today!</p>
                    <NavLink to="/write"><button type="submit" className="Footer_Buttons sm:w-28 md:w-32 text-center text-white p-1 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Write a Blog</button></NavLink>
            </container>
            <Footer/>
        </div>
    );
}

export default About;