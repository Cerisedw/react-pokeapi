/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import Card from './components/card';
import Pagination from './components/pagination/pagination';
import './App.css';

function App() {
  const [pokes, setPokes] = useState([]);
  const [listePoke, setListePoke] = useState([]);
  const [imgShiny, setImgShiny] = useState(null);
  const [pagination, setPagination] = useState(0);


  useEffect(() => {
      if(pagination<0) setPagination(0);
      if(pagination>32) setPagination(32);
      const offset = 25 * pagination;
      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=25`)
      .then((res) => res.data)
      .then((data) => setListePoke(data.results))
  }, [pagination]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=25")
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
          <Pagination fnc={setPagination} pagi={pagination} />
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
