import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location' // se deja asi xq estan al mismo nivel en la carpeta
import WeatherData from './WeatherData' // Aca ponemos el from dirigido a la carpeta donde queremos importar el archivo, y por defecto siempre busca el archivo index.js, por lo tanto el nombre de la clase WeatherData, no importa
import transformWeather from './../../services/transformWeather';
import './styles.css'

class WeatherLocation extends Component { // Ejemplo de componente tipo clase

  constructor(props) {
    super(props);
    const { city } = props // Le decimos que una de las propiedades de props sea city (el valor esta en app.js)
    // this.state solo se puede usar dentro del constructor
    this.state = { // sirve como el estado local o parcial de nuestro componente, que ayuda a que el componente se renderise
      city,
      data: null,
    };
  }

  // Eventos del ciclo de vida del componente de react
  componentDidMount() {
    this.handleUpdateClick(); //agregamos la llamada al evento (al servidor) 
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then(resolve => { // implementamos promise
      console.log(resolve);
      return resolve.json();  // Hacemos esto xq los datos de la api estan en formato json
    }).then(data => { // Pasamos esos datos a la funcion data
      console.log(data); // aca mostramos por consola los datos que nos da la api
      const newWeather = transformWeather(data); // aca asignamos a la funcion getData los nuevo datos (se cambio el nombre de la funcion a transformWeather que se paso a otro archivo)
      console.log(newWeather);
      this.setState({ // se usa setState en lugar de this.state, para actualizar el estado
        data: newWeather,
      });
    });
  }

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state; // destructuring
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {/* Operador ternario: es un if en linea que permite disernir entre 2 opciones */}
        {data ? // Data viene con algo? si es true, vamos a mostrar la data, si no, entonces dice "Cargando"
          <WeatherData data={data}></WeatherData> :
          <CircularProgress color="secondary" />
        }
      </div > // Este es el componente mas sencillo
    );
  };
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}
// Exportamos el componente para que este disponible en todos lados
// Importamos donde lo que queremos usar, en nuestro caso App.js
export default WeatherLocation;
