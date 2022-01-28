import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const jsx = (
  <ul>
      <li>Universo Discreto</li>
      <li>Peixe Babel</li>
      <li>Science Vlogs Brasil</li>
  </ul>
);

ReactDOM.render(jsx, document.getElementById('root'));


//const jsx = <div>O fatorial de 3 é {3 * 2 * 1}</div>
//ReactDOM.render(jsx, document.getElementById('root'));

//const withJSX = <h1>Eu sou Javascript</h1>;
//const withoutJSX = React.createElement('h1', {}, 'Eu sou Javascript!');

//você poderia mudar o primeiro parâmetro para withoutJSX que funcionaria igual. Os dois representam a mesma coisa, mas escrever no formato JSX é muito mais fácil
//ReactDOM.render(withJSX, document.getElementById('root'));


//const jsx = <div>Outro Teste!!</div>
//ReactDOM.render(jsx, document.getElementById('root'));

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
