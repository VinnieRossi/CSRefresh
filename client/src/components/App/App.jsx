import React, { Component } from 'react';
import './App.scss';
import Blog from '../Blog/Blog.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import { Route, Switch } from 'react-router-dom';

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