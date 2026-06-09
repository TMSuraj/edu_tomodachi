import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/footer.css';
import facebook from '../assets/icons/facebook.svg';
import insta from '../assets/icons/insta.svg';
import twitter from '../assets/icons/twitter.svg';
import location from '../assets/icons/location.svg';
import phone from '../assets/icons/phone.svg';
import mail from '../assets/icons/mail.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__newsletter-section'>
          <div>
            <h2>Join Our Newsletter</h2>
            <h2>To Stay Updated</h2>
          </div>
          <form>
            <input type='email' placeholder='Enter Your Email' />
            <input type='submit' value='Subscribe' />
          </form>
      </div>
      <div className='footer__content-section'>
        <div>
          <Logo />
          <ul className='footer__media-links'>
            <li><a href='https://www.facebook.com' target='_blank'><img src={facebook} alt="facebook logo" /></a></li>
            <li><a href='https://www.instagram.com' target='_blank'><img src={insta} alt="insta logo" /></a></li>
            <li><a href='https://www.twitter.com' target='_blank'><img src={twitter} alt="twitter logo" /></a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul className='footer__icon-container'>
            <li><img src={location} alt="location icon" />31-Putalisadak</li>
            <li><img src={phone} alt="phone icon" />4010534</li>
            <li><img src={mail} alt="mail icon" />tomodachi.np@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Universities</li>
            <li>Gallery</li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className='footer__policy-section'>
        &copy; Tomodachi Educational Foundation Pvt. Ltd. All Right Reserved
      </div>
    </footer>
  )
}

export default Footer