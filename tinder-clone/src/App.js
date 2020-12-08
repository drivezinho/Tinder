import './App.css';
import React from "react";
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header/>
      {/*TinderCards*/}
      <TinderCards/>
      {/*SwipeButtons*/}
      <SwipeButtons/>
    </div>
  );
}

export default App;
