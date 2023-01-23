import {React, useState} from "react";
import Carousel from 'react-elastic-carousel';
import {RiPencilLine} from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from "../NavBar/NavBar";
import BlogCard from "../BlogCard/BlogCard"
import "./ProfileInfo.css";
import DefaultPhoto from "./DefaultPhoto.jpg"

function ProfileInfo() {
    const [current, setCurrent] = useState(0)
    const [currentPage, setCurrentPage] = useState(<Carousel className="container"><BlogCard/></Carousel>)

    function handleEditBtn(){
        setCurrent(!current)
        if(current) setCurrentPage(<Carousel className="container"><BlogCard/></Carousel>)
        else setCurrentPage(
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
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
                <div>
                    {currentPage}
                </div>
            </div>
    );

}
export default ProfileInfo;