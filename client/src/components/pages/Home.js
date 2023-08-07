import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  parisImage,
  newYorkImage,
  singaporeImage,
  sydneyImage,
  dubaiImage,
  japanImage,
  romeImage,
} from '../../images/carouselImages';

const imageSize = {
  width: '500px',
  height: '300px',
};

const Home = () => {
  return (
    <div className='home-container mt-24 px-4'>
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>
      </div>
      <div className='carousel-container mt-8'>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={true}
          thumbWidth={300}
          showStatus={true}
          autoPlay={true}
          interval={3000} // Set the interval (in milliseconds) for automatic carousel sliding
        >
          <div className='flex flex-row items-center justify-center'>
            <img src={parisImage} alt='Paris' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={newYorkImage} alt='New York' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={singaporeImage} alt='Singapore' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={sydneyImage} alt='Sydney' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={romeImage} alt='Rome' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={japanImage} alt='Japan' style={imageSize} />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <img src={dubaiImage} alt='Dubai' style={imageSize} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
