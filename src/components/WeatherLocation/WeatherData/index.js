import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css' //el archivo esta dentro de la misma carpeta, y no le indicamos nombre de clase xq aqui no se necesitara

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => { // Destructuring con objetos complejos 
  return (<div className="weatherDataCont" >
    <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    <WeatherExtraInfo humidity={humidity} wind={wind} />
  </div>);
};

WeatherData.protoType = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
