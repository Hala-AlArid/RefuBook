import React from 'react';
import "./AboutSection.css"
import { NavLink } from 'react-router-dom';

function AboutSection(){
    return (
        <div className='AboutSection'>
            <h1><b>About</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum ipsa dolorem maxime illo, 
                sequi adipisci non eaque quis quas? Minima aut ab commodi veritatis libero? Neque eaque aliquam dolores.</p>
                <NavLink exact to="/about"> <button type='submit'>Learn more</button></NavLink>
            
        </div>
    );
}

export default AboutSection;