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
    <div
      data-testid="application"
      className="App">
      <div data-testid="homeComp"> 
      <Home        
        setDisplayCharacters={setDisplayCharacters}
        setDisplayLocations={setDisplayLocations}
      />
        </div>

      {displayCharacters &&
       <div data-testid="charComp">
        <Characters/>
        </div>}

      {displaylocations &&
        <div data-testid="locComp">
        <Locations/>
        </div>}


    </div>
  );
}

export default App;
