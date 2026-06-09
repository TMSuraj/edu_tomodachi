import React from 'react';
import crest from '../assets/images/crest.png';
import '../styles/logo.css';

const Logo = () => {
  return (
    <div className='logo'>
        <div className='logo__img-container'><img src={crest} alt="company logo" /></div>
        <div className='logo__text-container'>
            <p>Tomodachi Educational</p>
            <p>Foundation Pvt. Ltd.</p>
        </div>
    </div>
  )
}

export default Logo;