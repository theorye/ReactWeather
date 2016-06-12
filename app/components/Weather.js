import React from 'react';


// Components
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

// API
import openWeatherMap from '../api/openWeatherMap';

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;

    this.setState({
      isLoading: true
    });

    debugger;
    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      self.setState({
        isLoading: false,
        location: null,
        temp: null
      });
    });

  },
  render: function() {

    // var location = this.state.location;
    // var temp = this.state.temp
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;