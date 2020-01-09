import React, { useState, useEffect } from 'react';
import './App.css';
// import { Container, Dimmer, Loader } from 'semantic-ui-react'

import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

const [characters, setCharacters] = useState([]);

useEffect(() => {
  async function fetchChar() {
    let res = await fetch("https://rickandmortyapi.com/api/character/")
    let data = await res.json();
    setCharacters(data.results);
    console.log(data)
}
fetchChar();
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
    </div>
  );
}

export default App;
