import React from "react";
import './weather.css';
import moment from "moment";
import { Button, Input } from "semantic-ui-react";

const Weather = ({ weatherData, query, onSearch, onChange, onKeyPress }) => {
  const refresh = () => {
    window.location.reload();
  };

  const getImageUrl = () => {
    const weatherId = weatherData.weather[0].id;
    const weatherGroup = parseInt(weatherId / 100);

    const imageMap = {
      2: '/Assets/Images/thunderstorm.gif',
      3: '/Assets/Images/drizzle.gif',
      5: '/Assets/Images/rain.gif',
      6: '/Assets/Images/snow.gif',
      7: '/Assets/Images/atmosphere.gif',
      800: '/Assets/Images/clear.gif'
    };
    if (weatherId >= 801 && weatherId <= 804) {
      return '/Assets/Images/clouds.gif';
    }

    return imageMap[weatherGroup] || imageMap[weatherId];
  };

  return (
    <div className="weather-app">
      <img src={getImageUrl()} alt="weathe hint" className="weather-image" />
      <div className="search">
        <Input
          style={{ marginTop: '20px' }}
          action={{
            style: { backgroundColor: '#1d8a84' },
            color: 'teal',
            labelPosition: 'left',
            icon: 'search',
            content: <div style={{ marginLeft: '-27px' }}>Search</div>,
            onClick: onSearch
          }}
          placeholder="Search for a city..."
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={query}
        />
        <div className="main">
          <div className="cityname">
            <p className="header">{weatherData.name}</p>
            <Button className="button" style={{ backgroundColor: '#1d8a84', color: 'white' }} circular icon="refresh" onClick={refresh}></Button>
          </div>
          <div className="flex">
            <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description">{weatherData.weather[0].description}</p>
          </div>
          <div className="flex">
            <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
            <p className="humi">Humidity: {weatherData.main.humidity} %</p>
            <p className="wind">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
          <div className="flex">
            <p className="srise">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className="sset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
