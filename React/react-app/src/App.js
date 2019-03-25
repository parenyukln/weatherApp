import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import WeatherInfo from './component/Weather/WeatherInfo';
import Days from './component/Days/Days';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <WeatherInfo/>
        <Days/>
      </div>
    );
  }
}

export default App;
