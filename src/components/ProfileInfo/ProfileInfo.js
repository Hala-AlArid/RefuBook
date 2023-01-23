import {React, useState} from "react";
import Carousel from 'react-elastic-carousel';
import {RiPencilLine} from 'react-icons/ri';
import NavBar from "../NavBar/NavBar";
import BlogCard from "../BlogCard/BlogCard"
import "./ProfileInfo.css";
import DefaultPhoto from "./DefaultPhoto.jpg"

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
    const [currentPage, setCurrentPage] = useState(<Carousel className="container"><BlogCard/></Carousel>)
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
                    setCurrentPage(<Carousel className="container"><BlogCard/></Carousel>)
            }}/>
            </div>
        </div>
        </form>
    )
    function handleEditBtn(){
        if(current) setCurrentPage(<Carousel className="container"><BlogCard/></Carousel>)
        else setCurrentPage(infoForm)
        setCurrent(!current)
    }

    return (
            <div className="ProfileBody">
                <NavBar/>
                <div className="mainInfo">
                    <img src={DefaultPhoto} alt="Profile" id="ProfilePhoto"/>
                    <button type="button" onClick={handleEditBtn} className="editBtn">
                        <RiPencilLine className="Icon"/>
                    </button>
                    <h3 id="UserName">Name</h3>
                </div>
                <div className="outerDiv">
                    {currentPage}
                </div>
            </div>
    );

}
export default ProfileInfo;