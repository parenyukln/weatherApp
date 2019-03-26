import React, { Component } from 'react';
import DaysIco from './DaysIco';
import DaysDate from './DaysDate';

class Day extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="days__day active">
                <DaysIco/>
                <DaysDate/>
            </div>
        );
    }
}

export default Day;