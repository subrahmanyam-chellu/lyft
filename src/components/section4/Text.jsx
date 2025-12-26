import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

import c1 from '/src/assets/c1.png';
import c2 from '/src/assets/c2.png';
import c3 from '/src/assets/c3.png';
import c4 from '/src/assets/c4.png';
import c5 from '/src/assets/c5.png';

const datas = [{ header: 'Wait & Save', image: c1, sm1: 'Budget-friendly', sm2: 'Private' },
{ header: 'Standard', image: c2, sm1: 'Efficient', sm2: 'Private' },
{ header: 'Priority Pickup', image: c3, sm1: 'Efficient', sm2: 'Private' },
{ header: 'Extra Comfort', image: c4, sm1: 'Nice cars', sm2: 'Top drivers' },
{ header: 'XL', image: c5, sm1: 'Spacious SUVs', sm2: 'Room for up to 6' },
];

const len=datas.length;


const Text = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600, // mobile
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 900, // tablets
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 1200, // large screens
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            }
            
            
        ]
    };


    const next = () => sliderRef.current?.slickNext();
    const prev = () => sliderRef.current?.slickPrev();

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Box sx={{
                maxWidth: '1024px',
                width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'flex-start' }
                //marginLeft:{lg:'128px'}, marginRight:{lg:'16px'},
                // alignItems:'flex-start'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                    <Typography sx={{ typography: { xs: 'h5', sm: 'h4', lg: 'h4' }, fontSize: '36px', fontWeight: '900', marginBottom: '16px', marginTop: '11px', textAlign: { xs: 'center', lg: 'start' } }}>How you get there is up to you</Typography>
                    <Typography>We’ve got options to get you where you’re going. Choose a ride that suits your mood and budget.*</Typography>
                </Box>
                <Box sx={{ marginLeft: { lg: '160px' } }}>
                    <IconButton onClick={prev}>
                        <WestIcon sx={{ width: '45px', height: '45px', fontSize: 'large', backgroundColor: 'white', color: 'black', borderRadius: '50%' }} />
                    </IconButton>
                    <IconButton onClick={next}>
                        <EastIcon sx={{ width: '45px', height: '45px', fontSize: 'large', backgroundColor: '#523BE4', color: 'white', borderRadius: '50%', marginLeft: '16px' }} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ my: '58px', maxWidth: { lg: '1560px' } }}>
                <Slider ref={sliderRef} {...settings}>
                    {
                        datas.map((data) => {
                            return (

                                <Card sx={{
                                    maxWidth: 288,
                                    height: 284,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                    
                                }}>
                                    <CardActionArea sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <CardHeader
                                            title={data.header}
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight:'700',
                                                '& .MuiCardHeader-content': { textAlign: 'center' }
                                            }}
                                        />
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 100, width: 122, objectFit: 'contain', mt: 1 }}
                                            image={data.image}
                                            alt={data.header}
                                        />
                                        <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h6" component="div">  {/* h6 for smaller size */}
                                                {data.sm1}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {data.sm2}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )

                        })
                    }
                </Slider>
            </Box>
            <Typography sx={{ fontSize: '12px', color: 'gray' }}>*Availability of bikes, scooters, and ide types varies by region.</Typography>

        </Box>
    )
}

export default Text
