import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Header from './components/Header';
import ImageCards from './components/ImageCards';
require('dotenv').config();

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
});

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  const inputSearchTerm = (e) => {
    return setSearchTerm(e.target.value);
  };

  const searchImages = async (e) => {
    e.preventDefault();
    await unsplash.search
      .photos(searchTerm, 1, 20)
      .then(toJson)
      .then((json) => {
        setPhotos(json.results);
      });
  };

  console.log(photos);
  return (
    <div id="app" className="app">
      <Header
        inputSearchTerm={inputSearchTerm}
        inputValue={searchTerm}
        clickSearch={searchImages}
      />
      <main id="main" className="main container-fluid">
        <ImageCards photos={photos} />
      </main>
    </div>
  );
}

export default App;
