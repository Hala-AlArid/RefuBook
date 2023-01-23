import React from "react";

function Story(props){ 
    return(
                <div key={props.id} id={props.id} className='flex justify-center flex-col md:flex-row gap-x-32 pt-16 flex align-center items-center'>
                { /* STORY ROW */ }
               <div className=''>
                <img className='w-[50%] m-auto' alt='article' src={props.img}/>
                </div>
        
               <div className='grid grid-cols-1 w-96 '>
                <div className='w-fit '>
                 <p className='p-2 w-full rounded-md font-bold align-center lang bg-white text-sky-600 text-xs	'>{props.language}</p>
                </div>
                    <p className='text-white text-4xl pt-2 pb-2 font-thin leading-normal cursor-pointer'>
                    {props.title}</p>
                <div className='pb-8 pt-4 grid grid-cols-2 items-center text-white gap-x-0.5 w-7/12'>
                    <div>profile pic</div>
                    <div className='w-full'>
                        <p className='font-bold'>{props.username}</p>
                        <p className='font-thin'>{props.status}</p>
                    </div>
                </div>
               </div>
             </div>

    )
}

export default Story;