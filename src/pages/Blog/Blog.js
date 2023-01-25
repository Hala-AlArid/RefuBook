import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from "../../components/Footer/Footer";
import './Blog.css';
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery, where, doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/firebase";

 function Blog() {

  const [hide, setHide] = useState(true);

  const handleClick = (id, title, content, image, username, profile_pic, date, category) => {
    setHide(false);
    localStorage.setItem("BlogID", id);
    localStorage.setItem("title", title);
    localStorage.setItem("content", content);
    localStorage.setItem("image", image);
    localStorage.setItem("username", username);
    localStorage.setItem("profile_pic", profile_pic);
    localStorage.setItem("date", date);
    localStorage.setItem("category", category);
  }

  // fetch all blogs

  const query = fsQuery(collection(db, "blogs"));

  const [blogs, loading, error] = useCollection(query);


  if (loading) {
    return <div className='flex justify-center items-center'><p>Loading Blogs...</p></div>
  }

  if (error) {
    return <div className='flex justify-center items-center'><p>An error occured: {error?.message}</p></div>
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[100%]">
      <NavBar />

     <div className='w-[100%] flex justify-start items-center md:pl-12 pl-4 m-0'>
     <div style={{display:hide? "none" : "flex"}} className='hover:cursor-pointer' onClick={() => setHide(true)}><i className='fa fa-arrow-left text-sky-700 text-bold mr-2'>    Return</i></div>
     </div>

      <div id='List' className="w-[100%] flex-col justify-center items-center gap-2"
      style={{display: hide? "flex" : "none"}}
      >
      <h3 className='explore text-sky-700 text-bold md:text-3xl'>Explore Various blogs</h3>
      <div className="inline-flex items-center justify-center w-full">
    <hr className="md:w-64 w-32 h-1 mt-2 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg aria-hidden="true" className="md:w-5 md:h-5 w-4 h-4 text-sky-700 dark:text-sky-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
</div>
      <div className='md:pr-6 md:flex md:justify-end md:w-[100%]'>
           <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <label>Sort By: </label>
                <select className="mx-1 border-2 border-sky-700 w-32 text-center rounded-full">
                     <option>All</option>
                     <option>Jobs</option>
                     <option>Housing</option>
                     <option>How to</option>
                     <option>Documentation</option>
                     <option>Education</option>
                </select>
        </div>
</div>
<div className='flex flex-wrap gap-6 justify-center items-center text-center mb-24'>
      {blogs.docs.map((doc) => (
        <div onClick={() => {handleClick(doc.id, doc.data().title, doc.data().content, doc.data().image, doc.data().username, doc.data().profile_pic, doc.data().created_at, doc.data().category)}} key={doc.id} id={doc.id} className="rounded border border-gray-300 overflow-hidden shadow-xl p-2 hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="m-auto w-[200px] h-[200px] flex justify-center items-center text-center"><img src={doc.data().image}/></div>
        <div className="px-6 py-4">
          <div className="font-bold md:text-xl mb-2">{doc.data().title}</div>
        </div>
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={doc.data().profile_pic}/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{doc.data().username}</p>
              <p className="text-gray-600">{doc.data().created_at}</p>
            </div>
          </div>
      </div>
          ))}
      </div>
    </div>
    <div className='flex-col justify-center md:flex-row md:jutify-between gap-4 md:pr-12 md:pl-12 p-4 md:w-[85%]' style={{display:hide? "none" : "flex"}}>

      <div className='flex flex-col gap-2 items-center'>
      <h1 className='title md:text-4xl text-gray-700'>{localStorage.getItem("title")}</h1>
      <h3 className='text-gray-600 mb-2'><i className='fa fa-hashtag text-gray-600'>  </i>{localStorage.getItem("category")}</h3>
      <div className='border border-gray-300 w-[75%] md:w-[400px] md:h-[400px] flex justify-center items-center text-center'><img src={localStorage.getItem("image")}/></div>
      <div className='flex flex-row items-center justify-between w-[100%] m-2 gap-6'>

      <div className='flex items-center'>
      <img className="md:w-10 md:h-10 w-9 h-9 rounded-full" src={localStorage.getItem("profile_pic")}/>
      <h3 className='username ml-2'>{localStorage.getItem("username")}</h3>
      </div>

      <h3 className='date text-bold text-gray-700'>{localStorage.getItem("date")}</h3>
      </div>
      </div>

      <div className='flex flex-col mt-12'>
      <h3 className='content md:text-start text-center'>{localStorage.getItem("content")}</h3>
      </div>
      

    </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Blog;
