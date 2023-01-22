import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar2 from "../../components/NavBar/NavBar2";
function Profile(){

    const navigate = useNavigate();

    const logout =()=>{
        localStorage.clear()
        navigate('/');
    }

    return (
        <div>
            <NavBar2/>
            <h3>welcome {localStorage.getItem("email")}</h3>
            <button type="submit" onClick={logout}>logout</button>
            </div>

        
    )
}

export default Profile;