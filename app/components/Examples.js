import React from 'react';
import {Link} from 'react-router';
// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>EXAMPLESSSSSS</h3>
//     );
//   }
// });

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">EXAMPLES</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Huntsville'>Huntsville, Al</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

export default Examples;
