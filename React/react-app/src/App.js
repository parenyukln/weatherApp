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
    this.state = {
      jsonData: [],
      activeDay: 0
    };
  }

  componentDidMount() {
    fetch(this.requestUrl).then( response => {
      if ( response.status === 200 ) {
        return response.json();
      } else {
        throw new Error('Error loading data...');
      }
    }).then( body => {
      this.setState({
          jsonData: body
      });
    }).catch(alert);
  }

  render() {
    return (
      <div className="wrapper">
        <Header data={this.state.jsonData} activeDay={this.state.activeDay}/>
        <WeatherInfo data={this.state.jsonData} activeDay={this.state.activeDay}/>
        <Days data={this.state.jsonData} activeDay={this.state.activeDay}/>
      </div>
    );
  }
}

export default App;
