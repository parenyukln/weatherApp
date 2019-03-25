import React, { Component } from 'react';
import HeaderDate from './HeaderDate';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <HeaderDate/>
            </div>
        );
    }
}

export default Header;