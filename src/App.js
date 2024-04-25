import React, { useState, useEffect } from 'react';
import Weather from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchWeatherDataByCoords();
  }, []);

  const fetchWeatherDataByCoords = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      fetchData(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`);
    });
  };

  const fetchData = async (url) => {
    await fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.log(result);
      })
      .catch(e => console.error('Error fetching weather data: ', e));
  };

  const handleSearch = () => {
    if (query) {
      const apiUrl = `${process.env.REACT_APP_API_URL}/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}`;
      fetchData(apiUrl);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather
          weatherData={data}
          query={query}
          onSearch={handleSearch}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}
