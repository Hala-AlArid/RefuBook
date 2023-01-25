import {React, useState} from "react";
import Carousel from 'react-elastic-carousel';
import {RiPencilLine} from 'react-icons/ri';
import NavBar from "../NavBar/NavBar2";
import BlogCard from "../BlogCard/BlogCard"
import "./ProfileInfo.css";

function ProfileInfo() {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        biography: ''});   
    const [current, setCurrent] = useState(0)

    function handleInput(e){
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }
    function handleSumbit(e){
        e.preventDefault();
        alert("Submitted")
    }
    const [currentPage, setCurrentPage] = useState(
            <BlogCard/>
             )

    const infoForm = (
        <form onSubmit={handleSumbit}>
        <div className='form' >
    
            <div className='row'>
    
            <div className='data'>
                <h3 htmlFor='name'>Name: </h3>
                <input type="text" id='name' name='name' onChange={handleInput} value={formData.name}/>
            </div>
            <div className='data'>
                <h3 htmlFor='surname'>Surname: </h3>
                <input type="text" id='surname'/>
            </div>
                
            </div>
    
            <div className='row'>
                <div className='data fullLine'>
                    <h3 htmlFor='biography'>Biography: </h3>
                    <input type="text" id='biography'/>
                </div>
            </div>
    
            <div className='row'>
                <div className='data fullLine'>
                    <h3 htmlFor='location'>Location: </h3>
                    <input type="text" id='location'/>
                </div>
            </div>
            <div className="row btns">
            <input type="submit" id='save' value="SAVE"/>
            <input type="button" id='cancel' value="CANCEL" onClick={()=>{
                    setCurrent(!current)
                    setCurrentPage(<BlogCard/>)
            }}/>
            </div>
        </div>
        </form>
    )
    function handleEditBtn(){
        if(current) setCurrentPage(<BlogCard/>)
        else setCurrentPage(infoForm)
        setCurrent(!current)
    }

    return (
            <div className="ProfileBody">
                <NavBar/>
                <div className="mainInfo">
                    <div className="w-24 h-24 rounded-full border border-gray-300 flex justify-center items-center"><img src={localStorage.getItem("profile_pic")} alt="Profile" id="ProfilePhoto"/></div>
                    <button type="button" onClick={handleEditBtn} className="editBtn">
                        <RiPencilLine className="Icon"/>
                    </button>
                    <h3 id="UserName">{localStorage.getItem("username")}</h3>
                </div>
                <div className="outerDiv">
                    {currentPage}
                </div>
            </div>
    );

}
export default ProfileInfo;