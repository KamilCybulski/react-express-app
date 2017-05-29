import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Api from '../containers/Api';
import Popular from './Popular';
import Login from './Login';

const nono = () => (
  <p>Not Found</p>
);


const App = () => (
  <div>
    <Router>
      <div className='container'>
        <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/api' component={Api} />
          <Route path='/popular' component={Popular} />
          <Route path='*/login' component={Login} />
      </div>
    </Router>
  </div>
);


export default App;
