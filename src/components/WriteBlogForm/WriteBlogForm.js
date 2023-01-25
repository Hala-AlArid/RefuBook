import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase/firebase";
import {collection, query as fsQuery, where, addDoc} from "firebase/firestore";

function WriteBlogForm(){
    const [url, setUrl] = useState(null);
    const [img, setImage] = useState(null);

    const handleImageChange = (e) =>{
      const file = e.target.files[0];
      const type = file.type;
        if(file){
            setImage(file);
        }

        var fileReader = new FileReader();

        fileReader.onload = function(ev){
          document.getElementById("preview").setAttribute("src", ev.target.result);
        }
        fileReader.readAsDataURL(file);
      
        addImage(file, type);
    }

    const addImage = (f, type) =>{

        const imageRef = ref(storage, `images/${f.name}`);

        const metadata = {
          contentType: type,
        };

        uploadBytes(imageRef, img, metadata).then(()=>{
            getDownloadURL(imageRef).then((u) => {
                setUrl(u);
            }).catch(error => {
                console.log(error.message, "error getting the image url");
            });
            setImage(null);
        }).catch(error => {
            console.log(error.message)
        });
      
    }

    const addBlog = (e, url) =>{
      const data = new FormData(e.currentTarget);
    
        e.currentTarget.reset();
        const title = data.get("title");
        const language = data.get("language");
        const content = data.get("content");
        const category = data.get("category");
        const user_email = localStorage.getItem("email");
        const image = url;
        const username = localStorage.getItem("username");
        const profile_pic = localStorage.getItem("profile_pic");
        const status = data.get("status");

        var today = new Date();
        var year = today.getFullYear();
        var mes = today.getMonth()+1;
        var dia = today.getDate();
        var fecha =dia+"-"+mes+"-"+year;
    
        const blog = {
          title,
          language,
          content,
          image,
          category,
          user_email,
          username,
          profile_pic,
          created_at: fecha,
        };
    
        const readLaterRef = collection(db, "blogs");
    
        addDoc(readLaterRef, blog)
          .then((snapshot) => {
            console.log("Created new entry. Id:", snapshot.id);
            window.alert("Your blog was added successfully!");
          })
          .catch((err) => {
            alert("Error adding blog.");
            console.error(err);
          });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog(e, url);
        document.getElementById("preview").setAttribute("src", " ");
      };
    
      return (
        <div className="p-12 flex flex-col gap-6 w-[100%]">

        <div className="w-[100%] flex justify-center items-center"><h1 className="md:text-5xl text-2xl font-sans text-sky-700 text-bold">Share your Story</h1></div>
        <div className="inline-flex items-center justify-center w-full md:mb-4">
    <hr className="md:w-64 w-32 h-1 mt-2 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg aria-hidden="true" className="md:w-5 md:h-5 w-4 h-4 text-sky-700 dark:text-sky-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
</div>

        <div>
          
        <form onSubmit={handleSubmit} className="flex flex-col gap-14 justify-center">

        <div className="flex gap-2 md:flex-row flex-col justify-center md:justify-start items-center md:items-start">
        <label className="w-[250px] font-semibold text-center md:text-start">Select an image:</label>

        <input required type="file" name="image" accept="image/*" onChange={handleImageChange}
        className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-2
            file:border-blue-50
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-white
            hover:file:text-blue-700
            hover:file:border-2
            hover:file:border-blue-500
          " />
          <img id="preview" className="w-[25%] h-auto flex justify-center items-center"/>
          
        </div>
           
          <div className="flex gap-2 md:flex-row flex-col justify-center md:justify-start items-center md:items-start">
          <label className="w-[250px] font-semibold text-center md:text-start">Enter a title:</label>
          <input required type="text" placeholder="Enter a title" name="title" className="border-2 border-gray-400 p-1 w-[100%]" />
          </div>

          <div className="flex gap-2 md:flex-row flex-col justify-center md:justify-start items-center md:items-start">
          <label className="w-[250px] font-semibold text-center md:text-start">Write your blog here:</label> 
          <textarea required className="border-2 border-gray-400 p-1 w-[100%] h-[200px] text-start" type="text" placeholder="Insert text" name="content" />
          </div>

          <div className="flex gap-2 md:flex-row flex-col justify-center md:justify-start items-center md:items-start">
          <label className="w-[250px] font-semibold text-center md:text-start">Select your blog's language:</label>
          <select required name="language" className="border-2 border-gray-400 rounded w-[150px] p-1">
            <option>Arabic</option>
            <option>English</option>
            <option>Turkish</option>
          </select>
          </div>

          <div className="flex gap-2 md:flex-row flex-col justify-center md:justify-start items-center md:items-start">
          <label className="w-[250px] font-semibold text-center md:text-start">Select a category:</label>
          <select required name="category" className="border-2 border-gray-400 rounded w-[150px] p-1">
            <option>Jobs</option>
            <option>Housing</option>
            <option>How to</option>
            <option>Documentation</option>
            <option>Education</option>
          </select>
          </div>

          <button className="p-2 rounded-md border-2 bg-sky-700 w-[150px] text-white hover:bg-white hover:border-sky-700 hover:text-sky-700" type="submit">Add Blog</button>
        </form>
        </div>
        </div>
      );
}

  


export default WriteBlogForm;