import React from 'react';
import { SendEmail, ContactForm } from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div className='bg-[#70CDD6]'>
      <ContactForm />
      <SendEmail />
    </div>
  );
}
export default Contact;
