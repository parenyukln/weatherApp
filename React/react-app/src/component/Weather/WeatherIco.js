import React, { Component } from 'react';

class WeatherIco extends Component {
    constructor(props) {
        super(props);
        this.weatherIco = this.props.weatherIco;
    }

    componentDidMount() {
        console.log(this.weatherIco);
    }

    render() {
        return (
            <div className="weather__ico">
                <div className="weather__ico_inner-one circle">
                    <div className="weather__ico_inner-two circle">
                        <div className="weather__ico_inner-three circle">
                            <div className="weather__ico_inner-four circle">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30vw" height="30vw" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                                    <path d="M82.7,36.1c-0.4,0-0.9,0-1.3,0.1c-2.3-6-8-9.9-14.3-9c-3-2.3-6.5-3.6-10.2-3.6c-6.4,0-12.3,4.1-15.3,9.8  c-2.8-1.5-5.7-2.3-9-2.3c-10.3,0-18.6,7.6-20.3,18.2C7.8,52.2,4.9,57,4.9,61.7c0,8.1,6.6,14.8,14.7,14.8h45.3  c8.4,0,15.4-6.8,15.4-14.8c0-0.5,0-0.9-0.1-1.3h2.5c6.8,0,12.4-5.5,12.4-12.2C95.1,41.5,89.5,36.1,82.7,36.1z M75.1,61.7  c0,5-4.8,9.4-10.2,9.4H19.6c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9  c2.7,0,5,0.7,7.3,2.1c1,0.6,2,1.4,3,2.4l1,1l1-0.3l0.3-0.1c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c2.7,0,5.2,1.1,7.1,2.8c1.6,1.4,2.6,3.3,3,5.3C75,60.8,75.1,61.3,75.1,61.7z M82.7,55.1h-4.1  c-2.6-4.8-7.8-8.1-13.7-8.1c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.6,0-1.4,0-2.2,0.1c2-4.1,6.2-7.1,10.6-7.1  c2.8,0,5.5,1.1,7.7,3.1l1.1,1l1.4-0.4c0.6-0.2,1.2-0.2,1.8-0.2c3.9,0,7.3,3.1,8.1,7.5l0.6,3l2.9-1c0.8-0.3,1.6-0.4,2.3-0.4  c3.9,0,7.1,3.1,7.1,6.9C89.8,52,86.6,55.1,82.7,55.1z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        );
    }
}

export default WeatherIco;