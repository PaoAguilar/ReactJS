import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectedLocation = city => { // LocationList trae el parametro city a esta funcion
        this.props.setCity(city); // el dispatch ayuda a disparar la accion
    }
    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>{/* this.handleSe... no es necesario xq no es un componente tipo clase (YA ES TIPO CLASE JEJE)*/}
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);

/*Se puede separar:
const AppConnected = connect...
export default AppConnected*/