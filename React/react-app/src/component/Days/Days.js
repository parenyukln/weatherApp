import React, { Component } from 'react';
import Day from './Day';

class Days extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="days">
                <Day/>
                <Day/>
                <Day/>
            </div>
        );
    }
}

export default Days;