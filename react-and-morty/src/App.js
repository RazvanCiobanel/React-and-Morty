import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Characters from "./components/Characters";
import Locations from "./components/Locations";


function App() {
  
  const [displayCharacters, setDisplayCharacters] = useState(false)
  const [displaylocations, setDisplayLocations] = useState(false)

    

  return (
    <div className="App">

      <Home       
        setDisplayCharacters={setDisplayCharacters}
        setDisplayLocations={setDisplayLocations}
      />

      {displayCharacters &&
        <Characters />}

      {displaylocations &&
        <Locations />}


    </div>
  );
}

export default App;
