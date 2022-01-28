import React, {Component} from 'react';
import './App.css';
import Person from './Person';

function App() {
    return(
      <div>
        <center>
        <h1>Componente pessoa: </h1>
        <Person name="Wendel Tadeu" age={49} genre='m' />
      </div>
   )
}

export default App;
