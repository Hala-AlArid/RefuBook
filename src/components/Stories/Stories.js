import React from 'react';
import "../../App.css";
import Image from"../../images/Image.png";

function Stories (){
   return <div className='background w-full min-h-fit pl-20 pt-20' >
    { /* SUBTITLE */}
    <div>
        <h2 className='text-white text-6xl'>
            Latest Stories</h2>
        <p className='text-xl text-white pt-4 max-w-lg'>
            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
    </div>

    { /* STORIES */ }
     <div className='flex justify-center grid grid-cols-2 gap-x-32 pt-16 flex align-center items-center place-content-stretch pb-10'>
        { /* STORY ROW */ }
       <div className='w-max  ml-0 '><img className='w-fit' alt='article' src={Image}/></div>

       <div className='grid grid-cols-1 w-96 '>
        <p className='bg-white langcolor p-2 w-24 rounded-md font-bold pl-3 align-center'>Language</p>
        <p className='text-white text-4xl pt-2 pb-2 font-thin leading-normal'>
            How I learned Turkish quickly and what are the best places to learn.</p>
        <div className='pb-8 pt-4 grid grid-cols-2 items-center text-white gap-x-0.5'>
            <div>profile pic</div>
            <div>
                <p className='font-bold'>Ahmad Faysal</p>
                <p className='font-thin'>Refugee in Turkey</p>
            </div>
        </div>
       </div>
     </div>
    </div>
};

export default Stories;