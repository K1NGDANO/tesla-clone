import React from 'react';

import './App.css';
import logo from './logo.svg';

import Header from './components/Header.js';
import { Counter } from './features/counter/Counter';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
