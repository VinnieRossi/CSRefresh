import React, { Component } from 'react';
import './App.scss';
//import * as firebase from 'firebase';
import Blog from '../Blog/Blog.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      header: "",
      chapters: []
    };
  }
  
  componentDidMount() {
    const blogTitle = 'Genesis';
    // Fetch blog response from database
    fetch(`/blogs/${blogTitle}`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          header: response.header,
          chapters: response.chapters
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <div className="header grid-12">
          <h2>Lultima</h2>
        </div>      
        <div className="content">
          <div className="grid-12">
            <Blog header={this.state.header} chapters={this.state.chapters}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

