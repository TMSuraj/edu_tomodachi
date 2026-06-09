import React from 'react';
import '../styles/feature-card.css';

const FeatureCard = ({sn, f_title, f_detail}) => {
  return (
    <div className='feature-card'>
        <span>0{sn}</span>
        <div className='feature-card__bar'></div>
        <div className='feature-card__content-section'>
            <h3>{f_title}</h3>
            <p>{f_detail}</p>
        </div>
    </div>
  )
}

export default FeatureCard;