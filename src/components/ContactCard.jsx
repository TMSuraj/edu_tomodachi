import React from 'react';
import '../styles/contact-card.css';
import facebook from '../assets/icons/facebook.svg';
import insta from '../assets/icons/insta.svg';
import twitter from '../assets/icons/twitter.svg';
import tiktok from '../assets/icons/tiktok.svg';
import location from '../assets/icons/location.svg';
import phone from '../assets/icons/phone.svg';
import clock from '../assets/icons/clock.svg';


const ContactCard = () => {
  return (
    <div className='contact-card'>
        <div className='contact-card__title'>
            <h2>Get In Touch</h2>
            <p>We are just a click away from you!</p>
        </div>
        <div className='contact-card__main'>
            <div>
                <img src={location} alt="location icon" />
                <div>
                    <h4>Address</h4>
                    <ul>
                        <li>31-Putalisadak, Kathmadu</li>
                    </ul>
                </div>
            </div>
             <div>
                <img src={phone} alt="location icon" />
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>Phone: +977-1-4010534</li>
                        <li>Email: tomodachi.np@gmail.com</li>
                    </ul>
                </div>
            </div>
              <div>
                <img src={clock} alt="location icon" />
                <div>
                    <h4>Opening Time</h4>
                    <ul>
                        <li>Sunday-Friday: 10am-5pm</li>
                        <li>Saturday: Closed</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='contact-card__media'>
            <h4>Stay Connected</h4>
            <ul>
                <li><img src={facebook} alt="facebook icon" /></li>
                <li><img src={insta} alt="insta icon" /></li>
                <li><img src={twitter} alt="twitter icon" /></li>
                <li><img src={tiktok} alt="tiktok icon" /></li>
            </ul>
        </div>
    </div>
  )
}

export default ContactCard;