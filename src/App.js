import logo from './logo.svg';
import './App.css';
import React from "react";
import { Reset } from 'styled-reset'
import Template from "./component/Template";

function App() {
  return (
    <div className="App">
      <Reset />
      <Template/>
    </div>
  );
}

export default App;
