/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import Card from './components/card';
import './App.css';

function App() {
  const [pokes, setPokes] = useState([]);
  const [listePoke, setListePoke] = useState([]);

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
    <ul>
      {pokes?.map(item => (
        <li>
          <p>{item?.name}</p>
          <img src={item?.sprites.front_default} alt={item?.name} />

        </li>
      ))}
    </ul>
  );
}
export default App;
