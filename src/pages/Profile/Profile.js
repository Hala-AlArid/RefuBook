import React, { useEffect } from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { useNavigate } from 'react-router-dom';
function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("email") == null){
          navigate('/signin');
        }
      });

    return (
        <div>
        <div className='Page'>
            <ProfileInfo/>
        </div>            
        <h3>welcome {localStorage.getItem("username")}</h3>
      </div>

        
    )
}

export default Profile;