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
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'flex-end', marginTop: 16, textAlign: 'center' , marginRight:'250px'}}>
            <IconButton>
                <ArrowBackIcon onClick={prev} style={{backgroundColor:'green',color:'white', borderRadius:'50rem'}}/>
            </IconButton>
          <IconButton>
                <ArrowForwardIcon onClick={next} style={{marginLeft:8, backgroundColor:'green', color:'white', borderRadius:'50rem'}}/>
          </IconButton>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {data.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt="no image"
              style={{ height: '300px', width: '250px', border:'1px solid black' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
