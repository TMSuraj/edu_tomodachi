import React from 'react';
import '../styles/contact-form.css';

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <h3>Send us a message</h3>
        <form>
            <div className='form-group'>
                <label htmlFor="client">Your Name</label>
                <input id='client' type='text' placeholder='John Doe' />
            </div>
             <div className='form-group'>
                <label htmlFor="address">Address</label>
                <input id='address' type='text' placeholder='Kathmandu' />
            </div>
             <div className='form-group'>
                <label htmlFor="phone">Phone</label>
                <input id='phone' type='text' placeholder='98XXXXXXXX' />
            </div>
             <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input id='email' type='text' placeholder='john_doe@example.com' />
            </div>
             <div className='form-group'>
                <label htmlFor="subject">Subject</label>
               <select id='subject'>
                <option>General Inquiry</option>
                <option>Career Counselling</option>
                <option>Class Admission</option>
               </select>
            </div>
             <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea id='message' placeholder='write a message...'></textarea>
            </div>
            <input type='submit' value='Send Message' />
        </form>
    </div>
  )
}

export default ContactForm;