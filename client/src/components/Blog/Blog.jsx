import React, {Component} from 'react';

import './Blog.scss';
import Chapter from './Chapter/Chapter.jsx';


class Blog extends Component {

    constructor() {
    super();
    this.state = {
      header: "",
      chapters: []
    };
  }

  componentDidMount() {
    fetch(`/blogContents/${this.props.match.params.title}`)
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
      <article className="Blog">
        <h1>{this.state.header}</h1>
        {this.state.chapters.map((chapter, index) =>
          <Chapter key={index} componentList={chapter.components} />
        )}
        <div className="clear"></div>
      </article>
    );
  }
}

export default Blog;
