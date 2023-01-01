import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import Partners from "../../components/Partners/Partners";
import Stories from "../../components/Stories/Stories";
import Footer from "../../components/Footer/Footer";

function Home (){
    return <div className="flex flex-col gap-8">
        <NavBar />
        <Hero/>
        <AboutSection/>
        <Features/>
        <Testimonials/>
        <Partners/>
        <Stories/>
        <Footer/>
    </div>
};

export default Home;

