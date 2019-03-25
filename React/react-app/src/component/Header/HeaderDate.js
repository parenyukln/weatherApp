import React, { Component } from 'react';

class HeaderDate extends Component {
    constructor(props) {
        super(props);
        this.prepareData = this.prepareData.bind(this);
        this.id = this.props.listId;
        this.data = this.props.data;
        this.prepareData();
    }

    prepareData() {
        let timestamp = this.data.list[this.id].dt;
        let date = new Date();
        date.setTime(timestamp);
        alert( date.getHours() );
    }

    render() {
        return (
            <div className="header__date">
                    Сегодня, 21 апреля 2016
            </div>
        );
    }
}

export default HeaderDate;