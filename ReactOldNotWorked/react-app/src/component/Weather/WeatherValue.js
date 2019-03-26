import React, { Component } from 'react';

class WeatherValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0
        }
    }

    componentDidUpdate() {
        /*if ( this.props.weatherValue.length !== 0 ) {
            this.setState({
                temp: Math.round(this.props.weatherValue.temp.eve - 273)
            });
        }  */
    }

    render() {
        return (
            <div className="weather__value">
                {this.state.temp}
            </div>
        );
    }
}

export default WeatherValue;