import React, { Component } from 'react';
import './App.scss';
import Blog from '../Blog/Blog.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header grid-12">
          <h2>Review Core CS Quickly</h2>
        </div>      
        <div className="content">
          <div className="grid-12">
            <Switch>
              <Route path='/blogs/:title' component={Blog} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

