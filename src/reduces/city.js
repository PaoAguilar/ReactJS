import { SET_CITY } from './../actions'

export const city = (state = {}, action) => {  //el reducer recibe el estado y la accion como parametros
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.value } //retornamos un nuevo estado, que se conforma por el estado anterior mas el valor de la accion
        default:
            return state; //devuelve el state que le viene como parametro
    }
}