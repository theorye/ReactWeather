import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
import 'style!css!foundation-sites/dist/foundation.min.css';

// app css
//import 'style!css!app/styles/app.css'
// app scss
import 'style!css!sass!app/styles/app.scss';

$(document).foundation();

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
