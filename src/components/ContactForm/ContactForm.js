import React from 'react';
import { BsTwitter, BsInstagram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import emailjs from "emailjs-com";
import NavBar from "../NavBar/NavBar";
import Img from './FormImg.png';
import './ContactForm.css';


export function SendEmail (e){
  e.preventDefault();

    emailjs.sendForm ('gmail', 'refubook', e.target, 'rnWG21OSayn7_8qGO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
};

export function ContactForm() {
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
        <form id="form" onSubmit={SendEmail} className='grid gap-y-2'>
          <h3>Name</h3>
          <input id="name" type="text" placeholder="Name" className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Email</h3>
          <input id="email" type="text" placeholder="Email" className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Subject</h3>
          <input id='subject' type="text" placeholder='Subject' className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Message</h3>
          <input id="message" type="text" placeholder='Message' className='grid place-content-start'/>
          <button id="submit" type="submit" value="Send message" aria-label="Mute volume" >Send Message</button >
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

