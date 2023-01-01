import React from "react";
import Image from"../../images/Image.png";

function Story(){
    return(
        <div className='flex justify-center flex-col md:flex-row gap-x-32 pt-16 flex align-center items-center'>
        { /* STORY ROW */ }
       <div className=''>
        <img className='w-[75%] m-auto' alt='article' src={Image}/>
        </div>

       <div className='grid grid-cols-1 w-96 '>
        <div className='w-fit '>
         <p className='p-2 w-full rounded-md font-bold align-center lang bg-white text-sky-600 text-xs	'>Language</p>
        </div>
            <p className='text-white text-4xl pt-2 pb-2 font-thin leading-normal cursor-pointer'>
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
    )
}

export default Story;