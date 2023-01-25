import React from 'react';
import "./AboutSection.css"
import { NavLink } from 'react-router-dom';

function AboutSection(){
    return (
        <div className='AboutSection'>
            <h1><b>About us</b></h1>
            <p>RefuBook can be your ultimate guide for finding answers to all your questions, and sharing your experiences with others as well
                using RefuBook's various tools. </p>
                <NavLink to="/about"> <button type='submit'>Learn more</button></NavLink>
            
        </div>
    );
}

export default AboutSection;