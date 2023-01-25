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
        <div className='Page'>
            <ProfileInfo/>
        </div>            

        
    )
}

export default Profile;

