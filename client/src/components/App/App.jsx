import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from '../Blog/Blog.jsx';
import BlogList from '../BlogList/BlogList.jsx'
import Home from '../Home/Home.jsx';
import NotFound from '../NotFound/NotFound.jsx';

import './App.scss';
import Header from './Header/Header.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="grid-12">
            {/* Main content routing */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blogs/' component={BlogList} />
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