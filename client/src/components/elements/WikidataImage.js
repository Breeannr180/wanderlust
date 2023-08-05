import React from 'react';
import { useState, useEffect } from 'react';

const FeatureCard = ({ wikidata }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    getWikidataImage();
  }, []);

  const getWikidataImage = async () => {
    try {
      const response = await fetch(
        `https://www.wikidata.org/w/api.php?action=parse&format=json&page=${wikidata}&prop=images&formatversion=2`
      );
      const data = await response.json();
      if (data.parse.images.length > 0) setImage(data.parse.images[0].url);
    } catch (error) {
      console.error('Error fetching Wikidata image:', error);
    }
  };

  return (
    <div>
      {image ? (
        <img src={image} alt='Wikidata of Feature' />
      ) : (
        <p>No image found</p>
      )}
    </div>
  );
};

export default FeatureCard;
