import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Location = () => {
  return (
    <div>
      <Header />
      <div class='grid-container'>
        <div class='grid-item'>
          <h2>Event/Destination 1</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
        <div class='grid-item'>
          <h2>Event/Destination 2</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
        <div class='grid-item'>
          <h2>Event/Destination 3</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
        <div class='grid-item'>
          <h2>Event/Destination 4</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
        <div class='grid-item'>
          <h2>Event/Destination 5</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
        <div class='grid-item'>
          <h2>Event/Destination 6</h2>
          <p>Details...</p>
          <button>View/Edit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
