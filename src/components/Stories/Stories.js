import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";
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
    <StoryList/>
    </div> 
   );
};

const StoryList = () => {
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
        <Story key={doc.id} id={doc.id} img = {doc.data().image} language={doc.data().language} title ={doc.data().title} username={doc.data().username} status = {doc.data().status}/>
    ))}
        </div>


    )
}

export default Stories; 