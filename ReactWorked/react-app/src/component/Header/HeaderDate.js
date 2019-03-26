import React, { Component } from 'react';

class HeaderDate extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.activeDay;
        this.date = this.props.date;
    }

    componentDidMount() {
        const timestamp = this.date;
        let localDate = new Date();
        localDate.setTime(timestamp);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
        this.date = localDate.toLocaleString("ru", options)
    }

    render() {
        let dayName = '';
        switch(this.id) {
            case '0': 
                dayName = 'Сегодня' 
                break;
          
            case '1':
                dayName = 'Завтра'  
                break;

            case '2': 
                dayName = 'Послезавтра'  
                break;
          
            default:
                dayName = 'Сегодня'
                break;
        }

        return (
            <div className="header__date">
                    {dayName}, {this.date}
            </div>
        );
    }
}

export default HeaderDate;