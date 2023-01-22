import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Profile(){
    const navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("email") == null){
        navigate('/signin');
      }
    });

    const logout =()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        navigate('/');
    }

    return (
        <div>
            <h3>email: {localStorage.getItem("email")}</h3>
            <h3>username: {localStorage.getItem("username")}</h3>
            <h3>id: {localStorage.getItem("id")}</h3>
            <img src={localStorage.getItem("profile_pic")}/>
            <button type="submit" onClick={logout}>logout</button>
            </div>

        
    )
}

export default Profile;