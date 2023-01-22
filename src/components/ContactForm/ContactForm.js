import React from 'react';
import { BsTwitter, BsInstagram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import Img from './FormImg.png';
import './ContactForm.css';
 
function ContactForm() {
  return (
    <div className="FormBody bg-[#e9fbff] flex flex-col gap-14 justify-center items-center">
      <NavBar/>
      <div className="Content flex justify-center mt-16">
        <div>
        <h1>Get in Touch</h1>
        <h3>
          But Brooke Chaffin and Catherine Connors are looking to change that
          with the introduction.
        </h3>
        <br />
        <form id="form">
          <h3>Email</h3>
          <input id="email" type="text" placeholder="    hello@gmail.com" />
          <input id="message" type="text" placeholder="    Message" />
          <input id="submit" type="submit" value="Send" />
        </form>
        <div className="IconsList">
          <BsTwitter className="Icon" />
          <BsInstagram className="Icon" />
          <FaFacebookF className="Icon" />
        </div>
        </div>
        <div><img src={Img} alt="illustration mt-16" /></div>
      </div>
    </div>
  );
}
export default ContactForm;
