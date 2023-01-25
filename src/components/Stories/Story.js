import React from "react";

function Story(props){ 
    return(
            <div key={props.id} id={props.id} className="flex md:flex-row flex-col gap-2 justify-center  p-4 mt-4 border-2 border-[#4699C2] hover:border-2 hover:border-sky-700 hover:cursor-pointer">

                <div className="flex justify-center items-center md:w-[300px] w-[100%]">
                    <img alt='Story' src={props.img}/>
                </div>

                <div className="p-2 flex flex-col md:justify-start md:items-start justify-center items-center text-center md-text-start md:w-[300px] w-[100%]">

                    <div className="flex w-[100%] justify-start">
                    <p className='p-2 w-full rounded-md md:w-[25%] w-[25%] text-center font-bold align-center lang bg-white text-sky-600 text-xs'>{props.language}</p>
                    </div>

                    <div className="flex w-[100%] justify-start md:text-start">
                    <p className='text-white text-xl md:text-4xl pt-2 pb-2 font-thin leading-normal cursor-pointer'>{props.title}</p>
                    </div>

                    <div className="flex justify-start w-[100%]">
                    <div className="flex justify-start items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={props.profile_pic}/>
                    <p className='font-bold'>{props.username}</p>
                    </div>
                    </div>

                    <div className="flex w-[100%] justify-start mt-2">
                        <p className="text-gray-700">{props.date}</p>
                    </div>
                </div>
            </div>

    )
}

export default Story;