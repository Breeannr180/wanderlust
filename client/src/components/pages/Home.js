import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>
      </div>
      <div className='carousel-container'>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000} // Set the interval (in milliseconds) for automatic carousel sliding
        >
          <div>
            <img src='path/to/image1.jpg' alt='Image 1' />
            {/* You can add any additional content you want to display for each slide */}
          </div>
          <div>
            <img src='path/to/image2.jpg' alt='Image 2' />
          </div>
          <div>
            <img src='path/to/image3.jpg' alt='Image 3' />
          </div>
          {/* Add more divs with images for more slides */}
        </Carousel>
    </div>
    </div>
  );
};

export default Home;

