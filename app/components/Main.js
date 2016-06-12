import React from 'react';


// React Components
import Nav from './Nav';

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}  {/* Comes from React Router */ }
//       </div>
//     );
//   }
// });

var Main = ({children}) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {children}  {/* Comes from React Router */ }
    </div>
  );
}

module.exports = Main;
