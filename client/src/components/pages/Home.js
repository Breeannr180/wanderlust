import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='home'>
        <h1>WanderLust</h1>
        <h2>Explore the world with us!</h2>
      </div>
      <div className='search-boxes-container'>
          <div className='search-box'>
          {/* Random Destination Search Box */}
          <h3>Random Destination</h3>
          <input type='text' placeholder='Enter your search' />
          <button>Search</button>
        </div>
        <div className='search-box'>
          {/* Activities Search Box */}
          <h3>Activities</h3>
          <input type='text' placeholder='Enter your search' />
          <button>Search</button>
        </div>
        <div className='search-box'>
          {/* Most Popular Search Box */}
          <h3>Most Popular</h3>
          <input type='text' placeholder='Enter your search' />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

