import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar/NavBar';
import './Contact.css';

function Contact() {
  return (
    <div className="Page">
      <NavBar/>
      <ContactForm />
    </div>
  );
}
export default Contact;
