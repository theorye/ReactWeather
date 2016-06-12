import React from 'react';
import { Link, IndexLink } from 'react-router';

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>nav component</h2>
//         <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h2>nav component</h2>
      <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
