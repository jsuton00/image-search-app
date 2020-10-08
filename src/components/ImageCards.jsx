import React from 'react';

export default function ImageCards(props) {
  const { photos } = props;
  console.log(photos);
  return (
    <div id="image-cards" className="image-cards container-fluid">
      {photos.length > 0 &&
        photos.map((photo, index) => {
          return (
            <div key={index} className="image-card card">
              <img
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="image-card-photo card-img"
              />
            </div>
          );
        })}
    </div>
  );
}
