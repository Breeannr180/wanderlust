import React from 'react';
import ImageCarousel from '../elements/ImageCarousel';


const Home = () => {
  return (
    <div className='home-container mt-24 px-6 items-center justify-center h-screen'>
      <div className='home text-center'>
        <h1 className='text-5xl font-bold text-primary'>WanderLust</h1>
        <h2 className='text-3xl font-bold text-primary'>Explore the world with us!</h2>

        <ImageCarousel />
      </div>  
    </div>
  );
};

export default Home;
