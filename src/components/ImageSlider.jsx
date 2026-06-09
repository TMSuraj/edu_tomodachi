import React from 'react';
import pictures from '../data/pictures';

const ImageSlider = () => {
  const duplicatedPictures = [...pictures, ...pictures];

  return (
    <div className='image-slider'>
      <div className='image-container'>
        {duplicatedPictures.map((picture, index) => (
          <img 
            key={`${picture.pname}-${index}`} 
            src={picture.psource} 
            alt={picture.pname} 
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;