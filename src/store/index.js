import { createStore } from 'redux';
import { city } from './../reduces/city';

const initialState = {
    city: "San Salvador",
};

export const store = createStore(city, initialState, // se le pasa por parametro un reducer o sea una funcion, aca le tenemos que pasar el estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // esto se usa para que la extension devtools se pueda usar en chrome

