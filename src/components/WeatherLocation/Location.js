import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = ({ city }) => (
  // Destructuring: Es cuando tenemos una propiedad con un nombre que lo queremos asignar a una variable con el mismo nombre que la propiedad, la podemos asignar de forma directa con esa tecnica
  // const city = props.city; -> Esta linea por ejemplo la vamos a desestructurar
  // Si tuviera mas propiedades solo agregan con coma {city1, city2}
  // const { city } = props; -> Esto se usa cuando esta el parametro (props) establecido, pero la forma mas facil es dejar el argumento de un solo
  <div className="locationCont">
    <h1>{city}</h1>
  </div>
);

Location.protoTypes = {
  city: PropTypes.string.isRequired,
};

export default Location; 
