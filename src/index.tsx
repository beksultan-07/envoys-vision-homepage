import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  * { box-sizing: border-box; }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);