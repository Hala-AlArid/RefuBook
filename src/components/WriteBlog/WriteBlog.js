import React, { useEffect } from "react";
import WriteBlogForm from "./WriteBlogForm";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

function WriteBlog(){

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("email") == null){
      navigate('/signin');
    }
  });

  return (
    <main className="max-h-full">
      <NavBar/>
      <div className="flex flex-col justify-center items-center">
      <WriteBlogForm/>
      </div>
    </main>
  )
}

export default WriteBlog;