# Weather App

## Introduction
This React-based Weather App allows users to search for real-time weather conditions in any city. One of the coolest features is its dynamic display of weather-appropriate GIFs, making the user interface engaging and fun.


## Features

  - **Search Functionality**: Users can search for any city to get the latest weather information.

  - **Dynamic Weather GIFs**: Depending on the weather conditions (like sunny, rainy, snow, etc.), the app displays a corresponding GIF, adding a fun visual element to the weather data.

  - **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless experience across all platforms.

## Technologies Used

  - **React**: Used for building the user interface.
  - **Semantic UI React**: For styling and responsive design elements.
  - **API**: OpenWeatherMap API for fetching real-time weather data.

## Setup
To run this project locally:

```
git clone git@github.com:sumedhakoranga/weatherapp.git
cd weatherapp
npm install
npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = 'ENTER_KEY'
```

## Usage

1. **Start the App**: Run ```npm start```, and navigate to ```http://localhost:3000```.

2. Search for a City: Enter the name of the city in the search bar.

3. View Weather and GIF: Get real-time weather data along with a fun GIF representing the current weather.


