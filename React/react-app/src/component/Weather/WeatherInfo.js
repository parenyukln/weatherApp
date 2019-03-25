import React, { Component } from 'react';
import cloudsBig from '../../cloudsBig.svg';
import WeatherType from './WeatherType';
import WeatherIco from './WeatherIco';
import WeatherValue from './WeatherValue';
import WeatherCity from './WeatherCity';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weather">
                <WeatherType/>
                <WeatherIco/>
                <WeatherValue/>
                <WeatherCity/>
            </div>
        );
    }
}

export default WeatherInfo;