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
        if(file){
            setImage(file);
        }

        var fileReader = new FileReader();

        fileReader.onload = function(ev){
          document.getElementById("preview").setAttribute("src", ev.target.result);
        }
        fileReader.readAsDataURL(file);

        addImage(file);

    }

    const addImage = (f) =>{

        const imageRef = ref(storage, `files/${f.name}`);

        uploadBytes(imageRef, img).then(()=>{
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
        const username = localStorage.getItem("user_name");
        const profile_pic = localStorage.getItem("profile_pic");
        const status = data.get("status");
    
        const blog = {
          title,
          language,
          content,
          image,
          category,
          user_email,
          created_at: new Date(),
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
        <div className="p-12 rounded-md w-[100%]">
          
        <form onSubmit={handleSubmit} className="flex flex-col gap-14 ">

        <div className="flex gap-2">
        <label className="w-[250px] font-semibold">Select an image:</label>

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
           
          <div className="flex gap-2">
          <label className="w-[250px] font-semibold">Enter a title:</label>
          <input required type="text" placeholder="Enter a title" name="title" className="border-2 border-gray-400 p-1 w-[100%]" />
          </div>

          <div className="flex gap-2">
          <label className="w-[250px] font-semibold">Write your blog here:</label> 
          <textarea required className="border-2 border-gray-400 p-1 w-[100%] h-[200px] text-start" type="text" placeholder="Insert text" name="content" />
          </div>

          <div className="flex gap-2">
          <label className="w-[250px] font-semibold">Select your blog's language:</label>
          <select required name="language" className="border-2 border-gray-400 rounded w-[150px] p-1">
            <option>Arabic</option>
            <option>English</option>
            <option>Turkish</option>
          </select>
          </div>

          <div className="flex gap-2">
          <label className="w-[250px] font-semibold">Select a category:</label>
          <select required name="category" className="border-2 border-gray-400 rounded w-[150px] p-1">
            <option>Jobs</option>
            <option>Housing</option>
            <option>How to</option>
            <option>Documentation</option>
            <option>Education</option>
            <option>Other</option>
          </select>
          </div>

          <button className="p-2 rounded-md border-2 bg-sky-700 w-[150px] text-white hover:bg-white hover:border-sky-700 hover:text-sky-700" type="submit">Add Blog</button>
        </form>
        </div>
      );
}

  


export default WriteBlogForm;