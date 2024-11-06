import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1352519522.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3615591365.

function SliderCard({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="">
      <Slider {...settings}>
      {/* <div> */}
  {images.length > 0 ? (
    images.map((image, index) => (
      <div 
        className='mx-2'
        key={index}>
        {/* <pre>{image}</pre> */}
        {/* {{ edit_1 }} */}
        <a href={image} target="_blank" rel="noopener noreferrer">
          <img
            className="w-60"
            src={image}
            alt="No image"
          />
        </a>
        {/* {{ edit_1 }} */}
      </div>
    ))
  ) : (
    <pre>No images available</pre>
  )}

        </Slider>
      
    </div>
  );
}

export default SliderCard;