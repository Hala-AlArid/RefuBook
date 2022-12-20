import React from 'react';
import "../../App.css";

function Stories (){
   return <div className='background w-full min-h-fit pl-20 pt-20 place-content-center' >
    { /* SUBTITLE */}
    <div>
        <h2 className='text-white text-6xl'>
            Latest Stories</h2>
        <p className='text-xl text-white pt-4 max-w-lg'>
            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
    </div>
    { /* STORIES */ }
     <div className='grid grid-cols-2 gap-x-5 pt-14 flex justify-center'>
        { /* STORY ROW */ }
       <div className='w-12'>image here</div>
       <div className='grid grid-cols-1'>
        <p>Language</p>
        <p className='text-white text-4xl pt-2 pb-2 w-80 font-thin leading-normal'>
            How I learned Turkish quickly and what are the best places to learn</p>
        <div className='pb-8'>profile</div>
       </div>
     </div>
    </div>
};

export default Stories;