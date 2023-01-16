import React from "react";
import { useNavigate } from 'react-router-dom';

function Profile(){

    const navigate = useNavigate();

    const logout =()=>{
        localStorage.clear()
        navigate('/');
    }

    return (
        <div>
            <h3>welcome {localStorage.getItem("email")}</h3>
            <button type="submit" onClick={logout}>logout</button>
            </div>

        
    )
}

export default Profile;