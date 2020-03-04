/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import Card from './components/card';
import './App.css';

function App() {
  const [pokes, setPokes] = useState([]);
  const [listePoke, setListePoke] = useState([]);
  const [imgShiny, setImgShiny] = useState(null);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=151&limit=50")
    .then((res) => res.data)
    .then((data) => setListePoke(data.results))
  }, []);

  useEffect(() => {
    
    let promises = listePoke?.map((poke) => axios.get(poke.url));
    Promise
      .all(promises)
      .then((results) => {
        const data = results.map(res => res.data);
        setPokes(data);
      });
            
  }, [listePoke])
  return (
    <div class="containerVignetteDetails">
      <div class="vignetteDetails listePoke">
        <div class="vignetteTitle flex">
          <h2>Liste Pokémons</h2>
        </div>
        <div class="vignetteRow">

          <div id="content">
            {pokes?.map(item => (
              <Card poke={item} shiny={ imgShiny !== null } fnc={setImgShiny} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
