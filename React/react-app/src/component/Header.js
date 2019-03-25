import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header__date">
                    Сегодня, 21 апреля 2016
                </div>
            </div>
        );
    }
}

export default Header;