import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers'

const getTemp = kelvin => { // Le van a venir los datos en kelvin (los que trae la api)
    return Number(convert(kelvin).from("K").to("C").toFixed(0)); // con dos decimales
}

const getWeatherState = weather => { // Informacion de la API
    const { id } = weather;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
}

// Segun el tipo de datos que tenga la api, esos formatos utilizaremos
// Vamos a traer los datos del servidor (API) y los vamos a transformar
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;