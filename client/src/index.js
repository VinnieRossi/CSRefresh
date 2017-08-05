import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import NotFound from './components/NotFound/NotFound.jsx'
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


//<Route path='*' component={NotFound} />

ReactDOM.render((
  <HashRouter>
      <Route path='/' component={App} />
  </HashRouter>
), document.getElementById('root')
);
