import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Navbar from "./components/Navbar"
import Characters from "./components/Characters"


import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {

const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchChar() {
    let res = await fetch("https://rickandmortyapi.com/api/character/")
    let data = await res.json();
    setCharacters(data.results);
    setLoading(false);
    console.log(data)
}
fetchChar();
}, [])

  return (
    <div className="App">
      <Router>

        
<Navbar />
<Container>
  {loading ? (
    <Dimmer active inverted>
      <Loader inverted>Loading...</Loader>
    </Dimmer>
  ) : (
    <Switch>
    <Router exact path="/">
      {/* <Home /> */}
    </Router>
    <Router exact path="/characters">
      <Characters data={characters} />
    </Router>
    {/* <Router exact path="/planets">
      <Planets data={planets}/>
    </Router>
    <Router exact path="/films">
      <Films data={films}/>
    </Router>
    <Router exact path="/species">
      <Species data={species}/> */}
    {/* </Router> */}
  </Switch>
  )}
  
</Container>

</Router>

    </div>
  );
}

export default App;
