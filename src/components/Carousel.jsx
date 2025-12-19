import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import one from '/src/assets/1.png';
import two from '/src/assets/2.png';
import three from '/src/assets/15.png';
import four from '/src/assets/4.png';
import five from '/src/assets/5.png';
import { IconButton } from '@mui/material';

const data = [one, two, three, four, five];

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200, // large screens
        settings: { slidesToShow: 3, slidesToScroll: 3 }
      },
      {
        breakpoint: 900, // tablets
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* Arrows */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
        <IconButton onClick={prev}>
          <ArrowBackIcon style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%' }} />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowForwardIcon style={{ marginLeft: 8, backgroundColor: 'green', color: 'white', borderRadius: '50%' }} />
        </IconButton>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((src, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={src}
              alt="no image"
              style={{
                maxHeight: '300px',
                width: '100%',        // responsive width
                objectFit: 'contain', // keeps aspect ratio
                border: '1px solid black'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;