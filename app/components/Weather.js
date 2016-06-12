import React from 'react';


// Components
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

// API
import openWeatherMap from '../api/openWeatherMap';

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    const self = this;

    this.setState({
      isLoading: true
    });

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
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

export default Weather;
