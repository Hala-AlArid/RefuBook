
import React from 'react';
import { BsTwitter, BsInstagram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import emailjs from "emailjs-com";
import NavBar from "../NavBar/NavBar";
import Img from './FormImg.png';
import './ContactForm.css';


export function SendEmail (e){
  e.preventDefault();

    emailjs.sendForm ('service_g6dc96u', 'template_uizz26h', e.target, 'RE3pTEL2pqWmaER1F')
      .then((result) => {
          console.log(result.text);
          window.alert("Your Message was successfully sent to Refubook Team!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
};

export function ContactForm() {
  return (
    <div className="FormBody">
      <NavBar/>
      <img src={Img} alt="illustration" />
      <div className="Content">
        <h1>Get in Touch</h1>
        <h3>
          For further inquiries, contact RefuBook team directly! We will reply to you as soon as possible.
        </h3>
        <br />
        <form id="form" onSubmit={SendEmail} className='grid gap-y-2'>
          <h3>Name</h3>
          <input required name="name" id="name" type="text" placeholder="Name" className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Email</h3>
          <input required name="email" id="email" type="text" placeholder="Email" className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Subject</h3>
          <input required name="subject" id='subject' type="text" placeholder='Subject' className='pl-3 pt-2 pb-2 rounded-xl'/>
          <h3>Message</h3>
          <textarea required name="message" id="message" type="text" placeholder='Message' className='pl-3 pt-2 pb-2 rounded-xl'/>
          <button id="submit" type="submit" value="Send message" 
          className='bg-[#4699c2] w-[150px] text-white border-2 border-[#4699c2] rounded-2xl p-1  hover:text-[#4699c2] hover:bg-white'>Send</button >
        </form>
        <div className="IconsList">
          <BsTwitter className="Icon" />
          <BsInstagram className="Icon" />
          <FaFacebookF className="Icon" />
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
