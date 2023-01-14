import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Image from"../../images/Image.png";

function Story(){
    const query = fsQuery(
        collection(db, "blogs")
      );
    
      const [blogs, loading, error] = useCollection(query);
    
      if (loading) {
        return <p>Loading stories...</p>;
      }
    
      if (error) {
        return <p>An error occured: {error?.message}</p>;
      }
    return(
        <div>
    {blogs.docs.map((doc) => (
                <div key={doc.id} id={doc.id} className='flex justify-center flex-col md:flex-row gap-x-32 pt-16 flex align-center items-center'>
                { /* STORY ROW */ }
               <div className=''>
                <img className='w-[75%] m-auto' alt='article' src={doc.data().image}/>
                </div>
        
               <div className='grid grid-cols-1 w-96 '>
                <div className='w-fit '>
                 <p className='p-2 w-full rounded-md font-bold align-center lang bg-white text-sky-600 text-xs	'>{doc.data().language}</p>
                </div>
                    <p className='text-white text-4xl pt-2 pb-2 font-thin leading-normal cursor-pointer'>
                    {doc.data().title}</p>
                <div className='pb-8 pt-4 grid grid-cols-2 items-center text-white gap-x-0.5 w-7/12'>
                    <div>profile pic</div>
                    <div className='w-full'>
                        <p className='font-bold'>{doc.data().username}</p>
                        <p className='font-thin'>{doc.data().status}</p>
                    </div>
                </div>
               </div>
             </div>
    ))}
        </div>


    )
}

export default Story;