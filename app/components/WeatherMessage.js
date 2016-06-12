import React from 'react';

// var WeatherMessage = React.createClass({
//   render: function() {
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     let { temp, location } = this.props;
//
//     return (
//       <div>
//         <p>It's {temp} in {location}</p>
//       </div>
//     );
//   }
// });

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>It's {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
