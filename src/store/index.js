import { createStore } from 'redux';

export const store = createStore(() => { }, // se le pasa por parametro un reducer o sea una funcion
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // esto se usa para que la extension devtools se pueda usar en chrome

