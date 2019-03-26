import React, { Component } from 'react';

class WeatherType extends Component {
    constructor(props) {
        super(props);
        this.weatherType = this.props.weatherType;
    }

    componentDidMount() {
        console.log(this.weatherType)
    }

    render() {
        return (
            <div className="weather__type">
                {this.weatherType}
            </div>
        );
    }
}

export default WeatherType;