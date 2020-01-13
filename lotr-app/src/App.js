import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Location from "./components/Location";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChar() {
      let res = await fetch("https://rickandmortyapi.com/api/character/");
      let data = await res.json();
      setCharacters(data.results);
      setLoading(false);}

      async function fetchLoca() {
        let res = await fetch("https://rickandmortyapi.com/api/location/");
        let data = await res.json();
        setLocation(data.results);
        setLoading(false);}
      // console.log(data)

    //   console.log(data.info.pages);
    //   var pages = data.info.pages;
    //   const restOfThepages = await Promise.all(
    //     Array(data.info.pages)
    //     .fill(0)
    //     .map(i =>
    //         fetch(`https://rickandmortyapi.com/api/character/?page=${i+2}/info/pages`)
    //           .then(res => res.json())
    //           .then(d => d.results)
    //       )
    //   );
    //   console.log(restOfThepages);

    //   const flattenedData = restOfThepages.reduce(
    //     (acc, d) => [...acc, ...d],
    //     []
    //   );
    //   return [...data.results, ...flattenedData];
    //   setCharacters(restOfThepages);
    // }
    fetchChar();
    fetchLoca();
  }, []);

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
              <Router exact path="/location">
      <Location data={location}/>
    </Router>{/*
    <Router exact path="/films">
      <Films data={films}/>
    </Router>
    <Router exact path="/species">
      <Species data={species}/>
    </Router> */}
            </Switch>
          )}
        </Container>
      </Router>
    </div>
  );
}

export default App;