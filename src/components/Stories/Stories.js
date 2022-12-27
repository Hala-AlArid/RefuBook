import React from 'react';
import "./Stories.css";
import Image from"../../images/Image.png";

function Stories (){
   return <div className='background w-full min-h-fit pl-20 pt-20 relative' >
    { /* SUBTITLE */}
    <div className='inline-block relative'>
        <h2 className='text-white text-6xl'>
            Latest Stories</h2>
        <p className='text-xl text-white pt-4 max-w-lg'>
            Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
    </div>

    { /* STORIES */ }
     <div className='inline-block relative flex justify-center grid grid-cols-2 gap-x-32 pt-16 flex align-center items-center place-content-stretch pb-10'>
        { /* STORY ROW */ }
       <div className='w-max  ml-0 '><img className='w-fit' alt='article' src={Image}/></div>

       <div className='grid grid-cols-1 w-96 '>
        <div className='w-fit '>
         <p className='p-2 w-full rounded-md font-bold  align-center lang bg-white text-sky-600 text-xs	'>
            Language</p>
        </div>
            <p className='text-white text-4xl pt-2 pb-2 font-thin leading-normal'>
            How I learned Turkish quickly and what are the best places to learn.</p>
        <div className='pb-8 pt-4 grid grid-cols-2 items-center text-white gap-x-0.5 w-7/12'>
            <div>profile pic</div>
            <div className='w-full'>
                <p className='font-bold'>Ahmad Faysal</p>
                <p className='font-thin'>Refugee in Turkey</p>
            </div>
        </div>
       </div>
     </div>
    </div>
};

export default Stories;