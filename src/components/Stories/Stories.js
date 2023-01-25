import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./Stories.css";
import Story from "./Story";

function Stories (){
   return (
  <div className='bg-[#4699C2] p-6 md:p-20 flex flex-col justify-center items-center'>

    <div className='w-[100%] flex flex-col md:justify-start justify-center md:items-start items-center md:text-start text-center'>
        <h2 className='text-white md:text-6xl text-3xl'>Latest Stories</h2>
        <p className='md:text-xl text-white pt-4 max-w-lg'>
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
    {
      blogs.docs.map((doc, index) => (
       (index == 0 || index == 2)? <Story key={doc.id} id={doc.id} img = {doc.data().image} language={doc.data().language} title ={doc.data().title} username={doc.data().username} profile_pic = {doc.data().profile_pic} date = {doc.data().created_at}/> : null
    ))
    }
        </div>


    )
}

export default Stories; 