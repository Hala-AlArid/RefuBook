import React from 'react';
import "./Stories.css";
import Story from "./Story";

function Stories (){
   return (
   <div className='bg-[#4699C2] p-20 flex flex-col md:flex-col md:items-start items-center text-center md:text-start' >
    { /* SUBTITLE */}
    <div className='inline-block relative'>
        <h2 className='text-white text-6xl'>Latest Stories</h2>
        <p className='text-xl text-white pt-4 max-w-lg'>
            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
    </div>
    <Story/>
    <Story/>
    </div>
   );
};

export default Stories; 