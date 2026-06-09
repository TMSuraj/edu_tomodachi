import React from 'react';
import '../styles/contact.css';
import Form from '../components/ContactForm';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__title'>
        <h2>Contact Us</h2>
      </div>
      <div className='contact__main'>
        <ContactCard />
        <ContactForm />
      </div>
      <div className='contact__map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.359630959682!2d85.31998937405301!3d27.706180425545483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19078d68156f%3A0xccd08c50ecb8bc93!2s31%20Putali%20Sadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1780427286595!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Contact;