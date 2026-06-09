import React from 'react';
import {Link} from 'react-router-dom';
import facebook from '../assets/icons/facebook.svg';
import insta from '../assets/icons/insta.svg';
import twitter from '../assets/icons/twitter.svg';
import '../styles/team-card.css';

const TeamCard = ({source,tname,post}) => {
  return (
    <div className='team-card'>
        <div><img src={source} alt={post} /></div>
        <div className='team-card__description'>
            <h3>{tname}</h3>
            <span>{post}</span>
        </div>
        <div className='team-card__social-media'>
            <Link><img src={facebook} alt="facebook logo" /></Link>
            <Link><img src={insta} alt="instagram logo" /></Link>
            <Link><img src={twitter} alt="linkedin logo" /></Link>
        </div>
    </div>
  )
}

export default TeamCard;