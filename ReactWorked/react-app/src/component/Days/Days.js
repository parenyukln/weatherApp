import React, { Component } from 'react';
import Day from './Day';

class Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeDay: 0
        };
        this.firstItemClick = this.firstItemClick.bind(this);
        this.secondItemClick = this.secondItemClick.bind(this);
        this.thirdItemClick = this.thirdItemClick.bind(this);
    }

    componentDidUpdate() {
        /*if ( this.state.data !== this.props.data.list[this.state.activeDay].dt ) {
            this.setState( {
                date: this.props.data.list[this.state.activeDay].dt
            });
        } */
    }

    firstItemClick() {
        this.setState( prevState => {
            if ( prevState.activeDay !== 0 )
            return {activeDay: 0}
        });
    }

    secondItemClick() {
        this.setState( prevState => {
            if ( prevState.activeDay !== 1 )
            return {activeDay: 1}
        });
    }

    thirdItemClick() {
        this.setState( prevState => {
            if ( prevState.activeDay !== 2 )
            return {activeDay: 2}
        });
    }

    render() {
        return (
            <div className="days">
                <Day onClick={this.firstItemClick}/>
                <Day onClick={this.secondItemClick}/>
                <Day onClick={this.thirdItemClick}/>
            </div>
        );
    }
}

export default Days;