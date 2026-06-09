import React from 'react';
import '../styles/service-card.css';

const ServiceCard = ({title, source,detail}) => {
  return (
    <div className='service-card'>
        <div><img src={source} alt={title} /></div>
        <h3>{title}</h3>
        <p>{detail}</p>
    </div>
  )
}

export default ServiceCard;