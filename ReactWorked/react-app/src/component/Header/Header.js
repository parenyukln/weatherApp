import React, { Component } from 'react';
import HeaderDate from './HeaderDate';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now(),
            activeDay: 0
        };
    }

    componentDidUpdate() {
        if ( this.state.date !== this.props.data.list[this.state.activeDay].dt ) {
            this.setState( {
                date: this.props.data.list[this.state.activeDay].dt
            });
        } 
    }

    render() {
        return (
            <div className="header">
                <HeaderDate date={this.state.date} activeDay={this.state.activeDay}/>
            </div>
        );
    }
}

export default Header;