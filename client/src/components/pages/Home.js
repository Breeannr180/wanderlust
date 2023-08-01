import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
