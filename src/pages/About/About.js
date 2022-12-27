import React from "react";
import "./About.css";
// import NavBar from "../../components/NavBar/NavBar";
// import Testemonials from "../../components/Testimonials/Testimonials";
// import Partners from "../../components/Partners/Partners";
// import Footer from "../../components/Footer/Footer";

function About(){
    return (
        <div className="About">
            <header className="about-header">
            <h1>This is Navbar</h1>
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
                    {/* this should change in order to render team members from firebase */}
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                    <div className="member">
                        <h3>Emily Jørgensen</h3>
                        <p>Author at Panoply Store</p>
                    </div>
                </div>
            </container>
            <container className="testemonials"><h1>This is Testemonials</h1></container>
            <container className="partners"><h1>This is Partners</h1></container>
            <container className="call-to-action">
                {/* icon */}
                <h1>Share your story, help others and get help from others</h1>
                <p className="w-2/4">But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maverick, 
                    a social network that connects young girls with female mentors to express their creativity in a safe space.</p>
                <button type="submit"><b>Sign Up</b></button>
            </container>
            <container className="footer"><h1>This is Footer</h1></container>
        </div>
    );
}

export default About;