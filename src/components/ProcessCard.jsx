import React from 'react';
import '../styles/process-card.css';

const ProcessCard = ({sn,title,detail}) => {
  return (
    <div className='process-card'>
      <div>
          {`Step ${sn}`}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default ProcessCard;