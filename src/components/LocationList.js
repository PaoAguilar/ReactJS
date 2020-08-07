import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => { // vamos a esperar cities como nuestro parametro
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city); // el componente App.js posee esta funcion
    };
    const strToComponents = cities => (
        cities.map((city) => ( // city es nada mas la variable que va a ir iterando, y map ayuda a iterar, pudimos usar index como key, pero usamos city, xq estamos seguros que no se repite
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} >
            </WeatherLocation>))
    );
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;