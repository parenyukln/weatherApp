import React, { Component } from 'react';

class HeaderDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Date().now()
        };
        this.interval = '';
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="header__date">
                Сегодня, {this.state.time}
            </div>
        );
    }
}

export default HeaderDate;