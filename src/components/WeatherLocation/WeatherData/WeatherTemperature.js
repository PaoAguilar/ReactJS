import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers' // para llegar a la carpeta constants tenemos que salir de 3 carpetas estando en weathertemperature
import './styles.css'
// Mapeo entre eestado del clima y el iconito
const icons = { //estos nombres de los iconos se ven en la pagina de inter donde esta el css
    [CLOUD]: "cloud", //ahora las propiedades tienen un alias
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: 'day-showers',
};

const getWeatherIcon = weatherState => { // Obtener los nombres de los iconos del clima
    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if (icon)
        return <WeatherIcons className='wicon' name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className='wicon' name={'day-sunny'} size={sizeIcon} />
};

const WeatherTemperature = ({ temperature, weatherState }) => ( //Componente
    < div className="weatherTemperatureCont" >
        {
            getWeatherIcon(weatherState)
        }
        < span className="temperature" > {`${temperature}`}</span >
        < span className="temperatureType">{`C°`}</span >
    </div >
);

// Con proptypes se valida que los props del componente sean de un tipo de dato
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired, // se le pone isRequired, para si o si lleve un valor diferente de null
};

export default WeatherTemperature;