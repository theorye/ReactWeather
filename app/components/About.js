import React from 'react';

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About</h3>
//     );
//   }
// });
// Stateless Functional Component
const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.  I have built this for
        the complete React Developer Course.</p>
      <p>Here are some of the tools I used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework Used</li>
        <li><a href="http://openweathermap.org">One Weather Map</a> - I used open weather map to search for weather data by city name.</li>
      </ul>
    </div>

  );
};

export default About;
