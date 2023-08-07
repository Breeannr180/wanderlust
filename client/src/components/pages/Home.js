import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import parisImage from '../../images/Paris.jpg';
import newYorkImage from '../../images/New York.jpg';
import singaporeImage from '../../images/Singapore.jpg';
import sydneyImage from '../../images/Sydney.jpg';
import dubaiImage from '../../images/Dubai.jpg';
import japanImage from '../../images/Japan.jpg';
import romeImage from '../../images/Rome.jpg';

const imageSize = {
  width: '500px', 
  height: '300px', 
  // objectFit: 'cover', 
};

const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>
      </div>
      <div class='carousel-container'>
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
