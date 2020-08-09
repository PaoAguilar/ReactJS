import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import PropTypes from 'prop-types';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};*/

const api_key = "ec510d37c5213cde4dba18814c456931";
const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {  // Es otro metodo del ciclo de vida del componente y Se ejecuta cada vez que hay una actualizacion de las propiedades, como parametro estan las proximas propiedades a establecer (o sea aun no estan). este es un punto previo al establecimiento de las propiedades y previo a la actualizacion del componente
        if (nextProps.city !== this.props.city) {   // nextProps.city, es diferente a la city que esta actualmente?
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city) // Si es diferente,
        }
    }

    updateCity = city => {
        //fetch o axios (logra un nivel de covvertura para navegadores mas antiguos, fetch es bastante soportado pero axios tiene un nivel de covertura mayor - Axios es muy buena opcion)
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;
        // El fetch, genera una promise
        fetch(url_forecast).then( // then, permite obtener el resultado una vez se termina de ejecutar la promise, no se ejecuta en forma sincronica, si no que se ejecuta la primera sentencia, y luego se ejecuta lo que hay dentro del then    
            data => (data.json()),
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (  // Un array de componentes tiene que llevar una key
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data} >
            </ForecastItem >));
    }

    renderProgress() {
        return <h3>Cargando pronostico extendido</h3>
    }
    render() {
        const city = this.props.city; // o podemos hacer destructuring y poner const {city} = this.props
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>);
    }
}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;