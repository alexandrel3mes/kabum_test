import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';
import { AxiosResponse } from 'axios';

function App() {
  useEffect(() => {
    api
      .get("/")
      .then((response: AxiosResponse) => console.log(response.data))
      .catch((err: Error) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
