import React from 'react';

const SearchResults = ({ results }) => {
    if (!Array.isArray(results)) {
        return <div>No results found.</div>;
      }
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          {/* Display destination name */}
          <h2>{result.name}</h2>

          {/* Display destination images */}
          <div>
            <h3>Images:</h3>
            {result.images.map((image) => (
              <img
                key={image.id}
                src={image.source_url}
                alt={image.caption}
                style={{ width: '200px', height: '150px', objectFit: 'cover' }}
              />
            ))}
          </div>

          {/* Display destination activities */}
          <div>
            <h3>Activities:</h3>
            {result.activities.map((activity) => (
              <div key={activity.id}>{activity.name}</div>
            ))}
          </div>

          {/* Display destination features */}
          <div>
            <h3>Destination Features:</h3>
            <ul>
              {Object.entries(result.info).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
