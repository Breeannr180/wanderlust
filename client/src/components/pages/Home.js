import React from 'react';
import ImageCarousel from '../elements/ImageCarousel';

const Home = () => {
  return (
    <div className='home-container mt-24 px-4'>
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>

        <ImageCarousel />
      </div>
    </div>
  );
};

export default Home;
