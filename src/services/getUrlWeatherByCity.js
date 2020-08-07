import { url_base_weather, api_key } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`; // Esta es la url que da la documentacion de la api
}

export default getUrlWeatherByCity;