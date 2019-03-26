import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.requestUrl = "https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json";
    this.state = {
      jsonData: [],
      activeDay: 0,
      isFetching: true,
      error: null
    };
    this.dayName = 'Сегодня';
    this.date = Date.now();
    this.temp = 0;
    this.dateTodayFooter = Date.now();
    this.dateTodayFooter = Date.now();
    this.dateTomorrowFooter = Date.now();
    this.dateAfterTomorrowFooter = Date.now();
    this.svg = '';
    this.changeDayOne = this.changeDayOne.bind(this);
    this.changeDayTwo = this.changeDayTwo.bind(this);
    this.changeDayThree = this.changeDayThree.bind(this);
  }

  componentDidMount() {
    // Берем даннные
    fetch(this.requestUrl).then( response => {
      if ( response.status === 200 ) {
        return response.json();
      } else {
        throw new Error('Error loading data...');
      }
    }).then( body => {
      this.setState({
          jsonData: body,
          isFetching: false
      });
    }).catch(e => {
      console.log(e);
      this.setState({
        jsonData: [], 
        isFetching: false, 
        error: e 
      });
    });
  }

  toggleAnimate() {
    document.getElementsByClassName('header__date')[0].classList.toggle('transform')
        document.getElementsByClassName('weather')[0].classList.toggle('transform')
  }

  changeDayOne() {
    this.setState( prevState => {
      if ( prevState !== 0 ) {
        this.toggleAnimate()
        setTimeout( () => {
          this.toggleAnimate()
        }, 500)
        return {
          activeDay: 0
        }
      }
    })
  }

  changeDayTwo() {
    this.setState( prevState => {
      if ( prevState !== 1 ) {
        this.toggleAnimate()
        setTimeout( () => {
          this.toggleAnimate()
        }, 500)
        return {
          activeDay: 1
        }
      }
    })
  }

  changeDayThree() {
    this.setState( prevState => {
      this.toggleAnimate()
        setTimeout( () => {
          this.toggleAnimate()
        }, 500)
      if ( prevState !== 2 ) {
        return {
          activeDay: 2
        }
      }
    })
  }

  render() {
    const { jsonData, activeDay, isFetching, error } = this.state;

    if (isFetching) return <div>...Loading</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    // Переводим индекс в день
    switch(activeDay) {
      case '0': 
          this.dayName = 'Сегодня' 
          break;
    
      case '1':
          this.dayName = 'Завтра'  
          break;

      case '2': 
          this.dayName = 'Послезавтра'  
          break;
    
      default:
          this.dayName = 'Сегодня'
          break;
    }

    // Переводим таймстемп в дату
    const timestamp = jsonData.list[activeDay].dt;
    let localDate = new Date(timestamp*1000);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    const optionsFooter = {
      month: 'long',
      day: 'numeric',
    };
    this.date = localDate.toLocaleString("ru", options)

    // Тамстепм в дату в футере
    this.dateTodayFooter = new Date(this.state.jsonData.list[0].dt*1000).toLocaleString("ru", optionsFooter)
    this.dateTomorrowFooter = new Date(this.state.jsonData.list[1].dt*1000).toLocaleString("ru", optionsFooter)
    this.dateAfterTomorrowFooter = new Date(this.state.jsonData.list[2].dt*1000).toLocaleString("ru", optionsFooter)


    // Переводим температуру в цельсии
    this.temp = Math.round(jsonData.list[activeDay].temp.eve - 273);

    // Меняем большое svg
    switch(activeDay) {
      case '0': 
          this.svg = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30vw" height="30vw" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
              <path d="M82.7,36.1c-0.4,0-0.9,0-1.3,0.1c-2.3-6-8-9.9-14.3-9c-3-2.3-6.5-3.6-10.2-3.6c-6.4,0-12.3,4.1-15.3,9.8  c-2.8-1.5-5.7-2.3-9-2.3c-10.3,0-18.6,7.6-20.3,18.2C7.8,52.2,4.9,57,4.9,61.7c0,8.1,6.6,14.8,14.7,14.8h45.3  c8.4,0,15.4-6.8,15.4-14.8c0-0.5,0-0.9-0.1-1.3h2.5c6.8,0,12.4-5.5,12.4-12.2C95.1,41.5,89.5,36.1,82.7,36.1z M75.1,61.7  c0,5-4.8,9.4-10.2,9.4H19.6c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9  c2.7,0,5,0.7,7.3,2.1c1,0.6,2,1.4,3,2.4l1,1l1-0.3l0.3-0.1c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c2.7,0,5.2,1.1,7.1,2.8c1.6,1.4,2.6,3.3,3,5.3C75,60.8,75.1,61.3,75.1,61.7z M82.7,55.1h-4.1  c-2.6-4.8-7.8-8.1-13.7-8.1c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.6,0-1.4,0-2.2,0.1c2-4.1,6.2-7.1,10.6-7.1  c2.8,0,5.5,1.1,7.7,3.1l1.1,1l1.4-0.4c0.6-0.2,1.2-0.2,1.8-0.2c3.9,0,7.3,3.1,8.1,7.5l0.6,3l2.9-1c0.8-0.3,1.6-0.4,2.3-0.4  c3.9,0,7.1,3.1,7.1,6.9C89.8,52,86.6,55.1,82.7,55.1z"/>
            </svg>
          )
          break;
    
      case '1':
          this.svg = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30vw" height="30vw" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
              <path d="M29.2,67c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C31.1,69.2,30.5,67.6,29.2,67z"/><path d="M44.4,64.9c-1.3-0.6-2.8,0-3.4,1.3L38.9,71c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C46.3,67,45.7,65.5,44.4,64.9z"/><path d="M72.3,26.6c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.8,0-1.9,0.1-2.9,0.2c-3.9-3.4-8-5-12.8-5  c-10.3,0-18.6,7.6-20.3,18.2c-4.5,2.9-7.4,7.7-7.4,12.4c0,8.1,6.6,14.8,14.7,14.8h4.2l-1.1,2.4c-0.6,1.3,0,2.9,1.3,3.5  c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.7h8.6l-0.1,0.3c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2  c1,0,1.9-0.6,2.4-1.5l1.1-2.5h8.7l-1.1,2.4c-0.6,1.3,0,2.9,1.3,3.5c0.4,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.7h6.8  c8.4,0,15.4-6.8,15.4-14.8C87.7,33.4,80.6,26.6,72.3,26.6z M72.3,50.9H27c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7  l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9c3.9,0,7.1,1.4,10.3,4.5l1,1l1.3-0.3c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3  l2.9-0.8c1-0.3,2.1-0.4,3.1-0.4c5.5,0,10.2,4.4,10.2,9.5C82.5,46.5,77.7,50.9,72.3,50.9z"/><path d="M57.8,67c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C59.7,69.2,59.1,67.6,57.8,67z"/><path d="M38,79.3c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.8  C39.9,81.5,39.3,79.9,38,79.3z"/>
            </svg>
          ) 
          break;

      case '2': 
          this.svg = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30vw" height="30vw" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
              <path d="M72.3,32.8c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.8,0-1.9,0.1-2.9,0.2c-3.9-3.4-8-5-12.8-5  c-10.3,0-18.6,7.6-20.3,18.2c-4.5,2.9-7.4,7.7-7.4,12.4c0,8.1,6.6,14.8,14.7,14.8h45.3c8.4,0,15.4-6.8,15.4-14.8  C87.7,39.6,80.6,32.8,72.3,32.8z M72.3,57.1H27c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4  c0.9-8.6,7.4-14.9,15.4-14.9c3.9,0,7.1,1.4,10.3,4.5l1,1l1.3-0.3c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c5.5,0,10.2,4.4,10.2,9.5C82.5,52.7,77.7,57.1,72.3,57.1z"/><path d="M64.6,74.7h-2.5l1.2-2.2c0.5-0.9,0.3-2-0.6-2.5c-0.8-0.5-1.9-0.1-2.4,0.8l-1.2,2.1L58,70.8c-0.5-0.9-1.6-1.3-2.4-0.8  c-0.8,0.5-1.1,1.6-0.6,2.5l1.2,2.2h-2.5c-1,0-1.9,0.8-1.9,1.7c0,0.9,0.9,1.7,1.9,1.7h2.5L55,80.3c-0.5,0.9-0.3,2,0.6,2.5  c0.8,0.5,1.9,0.1,2.4-0.8l1.2-2.1l1.2,2.1c0.5,0.9,1.6,1.3,2.4,0.8c0.8-0.5,1.1-1.6,0.6-2.5l-1.2-2.2h2.5c1,0,1.9-0.8,1.9-1.7  C66.5,75.5,65.6,74.7,64.6,74.7z"/><path d="M43.9,70.2h-2.5l1.2-2.2c0.5-0.9,0.3-2-0.6-2.5c-0.8-0.5-1.9-0.1-2.4,0.8l-1.2,2.1l-1.2-2.1c-0.5-0.9-1.6-1.3-2.4-0.8  C34,66,33.8,67.1,34.3,68l1.2,2.2H33c-1,0-1.9,0.8-1.9,1.7c0,0.9,0.9,1.7,1.9,1.7h2.5l-1.2,2.2c-0.5,0.9-0.3,2,0.6,2.5  c0.8,0.5,1.9,0.1,2.4-0.8l1.2-2.1l1.2,2.1c0.5,0.9,1.6,1.3,2.4,0.8c0.8-0.5,1.1-1.6,0.6-2.5l-1.2-2.2h2.5c1,0,1.9-0.8,1.9-1.7  C45.8,70.9,45,70.2,43.9,70.2z"/>
            </svg>
          ) 
          break;
    
      default:
          this.svg = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30vw" height="30vw" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
              <path d="M82.7,36.1c-0.4,0-0.9,0-1.3,0.1c-2.3-6-8-9.9-14.3-9c-3-2.3-6.5-3.6-10.2-3.6c-6.4,0-12.3,4.1-15.3,9.8  c-2.8-1.5-5.7-2.3-9-2.3c-10.3,0-18.6,7.6-20.3,18.2C7.8,52.2,4.9,57,4.9,61.7c0,8.1,6.6,14.8,14.7,14.8h45.3  c8.4,0,15.4-6.8,15.4-14.8c0-0.5,0-0.9-0.1-1.3h2.5c6.8,0,12.4-5.5,12.4-12.2C95.1,41.5,89.5,36.1,82.7,36.1z M75.1,61.7  c0,5-4.8,9.4-10.2,9.4H19.6c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9  c2.7,0,5,0.7,7.3,2.1c1,0.6,2,1.4,3,2.4l1,1l1-0.3l0.3-0.1c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c2.7,0,5.2,1.1,7.1,2.8c1.6,1.4,2.6,3.3,3,5.3C75,60.8,75.1,61.3,75.1,61.7z M82.7,55.1h-4.1  c-2.6-4.8-7.8-8.1-13.7-8.1c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.6,0-1.4,0-2.2,0.1c2-4.1,6.2-7.1,10.6-7.1  c2.8,0,5.5,1.1,7.7,3.1l1.1,1l1.4-0.4c0.6-0.2,1.2-0.2,1.8-0.2c3.9,0,7.3,3.1,8.1,7.5l0.6,3l2.9-1c0.8-0.3,1.6-0.4,2.3-0.4  c3.9,0,7.1,3.1,7.1,6.9C89.8,52,86.6,55.1,82.7,55.1z"/>
            </svg>
          )
          break;
    }

    // Рендер
    return (
      <div className="wrapper">
        <div className="header">
          <div className="header__date">
            {this.dayName}, {this.date}
          </div>
        </div>
        <div className="weather">
          <div className="weather__type">
            {jsonData.list[activeDay].weather[0].description}
          </div>
          <div className="weather__ico">
              <div className="weather__ico_inner-one circle">
                  <div className="weather__ico_inner-two circle">
                      <div className="weather__ico_inner-three circle">
                          <div className="weather__ico_inner-four circle">
                              {this.svg}
                          </div>
                      </div>
                  </div>
              </div>	
          </div>
          <div className="weather__value">
            {this.temp}
          </div>
          <div className="weather__city">
            Казань
          </div>
        </div>
        <div className="days">
          <div className={ activeDay === 0 ? 'days__day active': 'days__day' } dataid="0" onClick={this.changeDayOne}>
            <div className="days__ico">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="15vw" height="15vw" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                  <path d="M82.7,36.1c-0.4,0-0.9,0-1.3,0.1c-2.3-6-8-9.9-14.3-9c-3-2.3-6.5-3.6-10.2-3.6c-6.4,0-12.3,4.1-15.3,9.8  c-2.8-1.5-5.7-2.3-9-2.3c-10.3,0-18.6,7.6-20.3,18.2C7.8,52.2,4.9,57,4.9,61.7c0,8.1,6.6,14.8,14.7,14.8h45.3  c8.4,0,15.4-6.8,15.4-14.8c0-0.5,0-0.9-0.1-1.3h2.5c6.8,0,12.4-5.5,12.4-12.2C95.1,41.5,89.5,36.1,82.7,36.1z M75.1,61.7  c0,5-4.8,9.4-10.2,9.4H19.6c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9  c2.7,0,5,0.7,7.3,2.1c1,0.6,2,1.4,3,2.4l1,1l1-0.3l0.3-0.1c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c2.7,0,5.2,1.1,7.1,2.8c1.6,1.4,2.6,3.3,3,5.3C75,60.8,75.1,61.3,75.1,61.7z M82.7,55.1h-4.1  c-2.6-4.8-7.8-8.1-13.7-8.1c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.6,0-1.4,0-2.2,0.1c2-4.1,6.2-7.1,10.6-7.1  c2.8,0,5.5,1.1,7.7,3.1l1.1,1l1.4-0.4c0.6-0.2,1.2-0.2,1.8-0.2c3.9,0,7.3,3.1,8.1,7.5l0.6,3l2.9-1c0.8-0.3,1.6-0.4,2.3-0.4  c3.9,0,7.1,3.1,7.1,6.9C89.8,52,86.6,55.1,82.7,55.1z"/>
              </svg>
            </div>
            <div className="days__date">
              {this.dateTodayFooter}
            </div> 
          </div>
          <div className={activeDay === 1 ? 'days__day active': 'days__day'} dataid="1" onClick={this.changeDayTwo}>
            <div className="days__ico">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="15vw" height="15vw" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <path d="M29.2,67c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C31.1,69.2,30.5,67.6,29.2,67z"/><path d="M44.4,64.9c-1.3-0.6-2.8,0-3.4,1.3L38.9,71c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C46.3,67,45.7,65.5,44.4,64.9z"/><path d="M72.3,26.6c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.8,0-1.9,0.1-2.9,0.2c-3.9-3.4-8-5-12.8-5  c-10.3,0-18.6,7.6-20.3,18.2c-4.5,2.9-7.4,7.7-7.4,12.4c0,8.1,6.6,14.8,14.7,14.8h4.2l-1.1,2.4c-0.6,1.3,0,2.9,1.3,3.5  c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.7h8.6l-0.1,0.3c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2  c1,0,1.9-0.6,2.4-1.5l1.1-2.5h8.7l-1.1,2.4c-0.6,1.3,0,2.9,1.3,3.5c0.4,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.7h6.8  c8.4,0,15.4-6.8,15.4-14.8C87.7,33.4,80.6,26.6,72.3,26.6z M72.3,50.9H27c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7  l0.1-1.4c0.9-8.6,7.4-14.9,15.4-14.9c3.9,0,7.1,1.4,10.3,4.5l1,1l1.3-0.3c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3  l2.9-0.8c1-0.3,2.1-0.4,3.1-0.4c5.5,0,10.2,4.4,10.2,9.5C82.5,46.5,77.7,50.9,72.3,50.9z"/><path d="M57.8,67c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.4-1.6l2.1-4.8  C59.7,69.2,59.1,67.6,57.8,67z"/><path d="M38,79.3c-1.3-0.6-2.8,0-3.4,1.3l-2.1,4.8c-0.6,1.3,0,2.9,1.3,3.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5l2.1-4.8  C39.9,81.5,39.3,79.9,38,79.3z"/>
              </svg>
            </div>
            <div className="days__date">
              {this.dateTomorrowFooter}
            </div> 
          </div>
          <div className={activeDay === 2 ? 'days__day active': 'days__day'} dataid="2" onClick={this.changeDayThree}>
            <div className="days__ico">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="15vw" height="15vw" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <path d="M72.3,32.8c-0.6,0-1.2,0-1.8,0.1c-1.9-6.5-7.9-11.2-14.7-11.2c-0.8,0-1.9,0.1-2.9,0.2c-3.9-3.4-8-5-12.8-5  c-10.3,0-18.6,7.6-20.3,18.2c-4.5,2.9-7.4,7.7-7.4,12.4c0,8.1,6.6,14.8,14.7,14.8h45.3c8.4,0,15.4-6.8,15.4-14.8  C87.7,39.6,80.6,32.8,72.3,32.8z M72.3,57.1H27c-5.9,0-9.5-4.9-9.5-9.4c0-3.1,2.4-6.6,5.8-8.4l1.3-0.7l0.1-1.4  c0.9-8.6,7.4-14.9,15.4-14.9c3.9,0,7.1,1.4,10.3,4.5l1,1l1.3-0.3c0.7-0.2,2.2-0.3,3.1-0.3c5.2,0,9.5,4,10.1,9.2l0.4,3l2.9-0.8  c1-0.3,2.1-0.4,3.1-0.4c5.5,0,10.2,4.4,10.2,9.5C82.5,52.7,77.7,57.1,72.3,57.1z"/><path d="M64.6,74.7h-2.5l1.2-2.2c0.5-0.9,0.3-2-0.6-2.5c-0.8-0.5-1.9-0.1-2.4,0.8l-1.2,2.1L58,70.8c-0.5-0.9-1.6-1.3-2.4-0.8  c-0.8,0.5-1.1,1.6-0.6,2.5l1.2,2.2h-2.5c-1,0-1.9,0.8-1.9,1.7c0,0.9,0.9,1.7,1.9,1.7h2.5L55,80.3c-0.5,0.9-0.3,2,0.6,2.5  c0.8,0.5,1.9,0.1,2.4-0.8l1.2-2.1l1.2,2.1c0.5,0.9,1.6,1.3,2.4,0.8c0.8-0.5,1.1-1.6,0.6-2.5l-1.2-2.2h2.5c1,0,1.9-0.8,1.9-1.7  C66.5,75.5,65.6,74.7,64.6,74.7z"/><path d="M43.9,70.2h-2.5l1.2-2.2c0.5-0.9,0.3-2-0.6-2.5c-0.8-0.5-1.9-0.1-2.4,0.8l-1.2,2.1l-1.2-2.1c-0.5-0.9-1.6-1.3-2.4-0.8  C34,66,33.8,67.1,34.3,68l1.2,2.2H33c-1,0-1.9,0.8-1.9,1.7c0,0.9,0.9,1.7,1.9,1.7h2.5l-1.2,2.2c-0.5,0.9-0.3,2,0.6,2.5  c0.8,0.5,1.9,0.1,2.4-0.8l1.2-2.1l1.2,2.1c0.5,0.9,1.6,1.3,2.4,0.8c0.8-0.5,1.1-1.6,0.6-2.5l-1.2-2.2h2.5c1,0,1.9-0.8,1.9-1.7  C45.8,70.9,45,70.2,43.9,70.2z"/>
              </svg>
            </div>
            <div className="days__date">
              {this.dateAfterTomorrowFooter}
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
