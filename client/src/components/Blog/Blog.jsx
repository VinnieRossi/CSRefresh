import React, {Component} from 'react';
import Chapter from '../Chapter/Chapter.jsx';
import './Blog.scss';

/* 
   The Blog component has two props: {header} and {chapters}
   The {header} is a simple string. 
   The {chapters} is an array of chapter components. 
*/
class Blog extends Component {
  render() {
    return (
      <article className="Blog">
        <h1>{this.props.header}</h1>
        {this.props.chapters.map((chapter, index) =>
          <Chapter key={index} componentList={chapter.components} />
        )}
        <div className="clear"></div>
      </article>
    );
  }
}

export default Blog;
