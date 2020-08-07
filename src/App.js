import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'San Salvador,sv',
  'Washington,us',
  'Caracas,ve',
  'Lima,pe',
  'Ciudad de Mexico,mx',
  'Texas,us',
];

class App extends Component {

  constructor() {
    super();
    this.state = { city: null, };
  }

  handleSelectedLocation = city => { // LocationList trae el parametro city a esta funcion
    this.setState({ city }) // esto es equivalente a {city: city}, se llaman igual
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography color='inherit'>
                Weather App
            </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>{/* this.handleSe... no es necesario xq no es un componente tipo clase (YA ES TIPO CLASE JEJE)*/}
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city &&
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
