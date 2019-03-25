import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import WeatherInfo from './component/Weather/WeatherInfo';
import Days from './component/Days/Days';

class App extends Component {
  constructor(props) {
    super(props);
    this.requestUrl = "https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json";
    this.loadData = this.loadData.bind(this);
    this.jsonData = '';
    this.loadData();
  }

  loadData() {
    fetch(this.requestUrl).then( response => {
      if ( response.status === 200 ) {
        return response.json();
      } 
    }).then( body => {
      this.jsonData = body;
      console.log(this.jsonData)
    }).catch(alert);
  }

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
