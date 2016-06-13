import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length >0) {
      this.refs.search.value = '';
      window.location.hash= '#/?location='+ encodedLocation;
    }
    //alert(location);
    //alert('Not yet wired up');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

export default Nav;

// <h2>nav component</h2>
// <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

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
