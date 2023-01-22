import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar2 from "../../components/NavBar/NavBar2";
function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("email") == null){
          navigate('/signin');
        }
      });

    return (
        <div>
            <NavBar2/>
            <h3>welcome {localStorage.getItem("username")}</h3>
            </div>

        
    )
}

export default Profile;