import React from 'react';
import Slider from 'react-slick';
import { Box, Paper, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselData = [
    {
      title: 'Slide 1',
      description: 'This is slide 1',
      imageUrl: 'https://via.placeholder.com/500x300/FF5733/FFFFFF',
    },
    {
      title: 'Slide 2',
      description: 'This is slide 2',
      imageUrl: 'https://via.placeholder.com/500x300/33FF57/FFFFFF',
    },
    {
      title: 'Slide 3',
      description: 'This is slide 3',
      imageUrl: 'https://via.placeholder.com/500x300/5733FF/FFFFFF',
    },
  ];

  return (
    <Box mt={4}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <Paper key={index} elevation={3} sx={{ padding: 2 }}>
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
            <Typography variant="h5" mt={2}>
              {item.title}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
            <Button variant="contained" color="primary" mt={2}>
              Learn More
            </Button>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel2;
