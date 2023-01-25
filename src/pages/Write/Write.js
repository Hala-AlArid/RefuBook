import React, { useEffect } from "react";
import WriteBlogForm from "../../components/WriteBlogForm/WriteBlogForm";
import NavBar2 from "../../components/NavBar/NavBar2"
import { useNavigate } from "react-router-dom";

function Write(){

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("email") == null){
      navigate('/signin');
    }
  });

  return (
    <main className="max-h-full">
      <NavBar2/>
      <div className="flex flex-col justify-center items-center">
      <WriteBlogForm/>
      </div>
    </main>
  )
}

export default Write;