import React, { Component } from 'react';
import WeatherType from './WeatherType';
import WeatherIco from './WeatherIco';
import WeatherValue from './WeatherValue';
import WeatherCity from './WeatherCity';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherId: 0,
            weatherType: '',
            weatherIco: '',
            weatherValue: '',
            weatherCity: 'Казань',
            activeDay: 0
        };
    }

    componentDidUpdate() {
        if ( this.state.weatherId !== 0 && this.state.weatherId !== this.props.data.list[this.state.activeDay].weather[0].id ) {
            this.setState( {
                weatherId: this.props.data.list[this.state.activeDay].weather[0].id,
                weatherType: this.props.data.list[this.state.activeDay].weather[0].description,
                weatherIco: this.props.data.list[this.state.activeDay].weather[0].icon,
                weatherValue: this.props.data.list[this.state.activeDay].temp.eve
            });
        } 
    }

    render() {
        return (
            <div className="weather">
                <WeatherType weatherType={this.state.weatherType}/>
                <WeatherIco weatherIco={this.state.weatherIco}/>
                <WeatherValue weatherValue={this.state.weatherValue}/>
                <WeatherCity weatherCity={this.state.weatherCity}/>
            </div>
        );  
    }
}

export default WeatherInfo;