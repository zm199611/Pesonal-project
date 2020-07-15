import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search/Search'
import Planet from './planet/Planet'
import Tabbar from './tabbar/Tabbar'
import Headers from './header/Headers'

function App() {
  return (
    <div className="App">
        <Headers />
        <Search />
        <Planet />
        <Tabbar />
    </div>
    
  );
}

export default App;
