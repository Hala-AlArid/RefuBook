import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import {auth, provider, FBprovider} from "../../firebase/firebase";
import NavBar from "../../components/NavBar/NavBar";

function SignUp() {

  const [value,setValue] = useState('');
  const navigate = useNavigate();

  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email);
        localStorage.setItem("username",data.user.displayName);
        localStorage.setItem("profile_pic",data.user.photoURL);
        localStorage.setItem("id",data.user.uid);
        navigate("/profile");
    });
    
}

const handleFBClick =()=>{
  signInWithPopup(auth,FBprovider).then((data)=>{
      setValue(data.user.email);
      console.log(data.user);
      localStorage.setItem("email",data.user.email);
      localStorage.setItem("username",data.user.displayName);
      localStorage.setItem("profile_pic",data.user.photoURL);
      localStorage.setItem("id",data.user.uid);
      navigate("/profile");
  });
  
}

  useEffect(()=>{
      setValue(localStorage.getItem('email'));
      console.log(value);
    
})

  return (
    <div className="bg-[#70CDD6] h-screen p-6">
      <div className="z-10 bg-white p-5 grid relative shadow-2xl shadow-gray-500 rounded-3xl  h-full overflow-hidden  ">
      <NavBar/>

        <div className="ml-4 z-20 flex space-x-24 md:flex md:justify-between md:mx-10 md:mt-8 ">
        
          <div className="text-[#4699C2] md:hidden font-semibold font-['Roboto']">
            Sign up
          </div>
        </div>
        <div className="z-20 bg-white p-5 rounded-3xl shadow-2xl shadow-gray-500 grid place-content-center md:w-1/2 md:justify-self-center md:flex md:relative md:h-72">
          <div className="place-self-center text-[#4699C2] font-bold font-['Roboto'] md:absolute md:top-6 md:text-xl">
            SIGN UP WITH
          </div>

       
         <button className="place-self-center h-10 bg-[#EB5757] text-white px-14 py-2 rounded-3xl m-5 border-2 border-[#EB5757] hover:bg-white hover:text-[#EB5757]" type='submit' onClick={handleClick}><i className="fa-brands fa-google"> </i></button>
        

          <div className="place-self-center font-['Roboto'] text-[#4699C2] font-semibold m-1 ">
            OR
          </div>

          
         <button className="place-self-center h-10 bg-[#2F80ED] border-2 border-[#2F80ED] text-white px-14 py-2 rounded-3xl m-5 hover:text-[#2F80ED] hover:bg-white" type='submit' onClick={handleFBClick}><i className="fa-brands fa-facebook-f"> </i></button>
        

          <div className="hidden md:absolute md:bottom-4 md:flex md:text-xl md:space-x-1 md:font-medium">
            <div className="text-[#70CDD6]  font-extrabold font-['Roboto']  text-lg">
              Already a member?
            </div>
            <div className="text-[#4699C2] "><NavLink to="/signin"><span className='cursor-pointer hover:text-sky-600'>Sign in</span></NavLink></div>
          </div>
        </div>
        <div className="grid mt-6 z-10 md:hidden">
          <div className="text-[#70CDD6] place-self-center font-extrabold font-['Roboto'] text-lg">
            Already a member?
          </div>
          <div className="text-white bg-[#4699C2] place-self-center px-5 py-1 rounded-3xl font-medium">
            <NavLink to="/signin">Sign in</NavLink>
          </div>
        </div>
        <div className="bg-[#E5FAFF] -z-10 rotate-45 h-96 w-96 absolute -bottom-24 -left-4 md:rounded-full md:h-screen md:w-screen md:rotate-0 md:-left-2/4  md:-top-4 ">
          {' '}
        </div>
      </div>
    </div>
  );
}

export default SignUp;