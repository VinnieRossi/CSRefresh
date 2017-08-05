import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import './BlogList.scss';

/*
  The titles are the actual database names for the blogs. This is different from the header, which can be more descriptive.
  As an example, if a blog is in a long-running series I could name it ALG_15. That doesn't describe anything about the blog
  This way I can be descriptive about the blog with the header but still have a short url
*/
class BlogList extends Component {

    constructor() {
      super();
      this.state = {
        blogs: [],
        titles: []
      };
      this.navToBlog = this.navToBlog.bind(this);
    }

    componentDidMount() {
      fetch('/blogs/')
        .then(res => res.json())
        .then(response => {
          this.setState({
            blogs: Object.values(response),
            titles: Object.keys(response)
          });
        });
    }

    navToBlog = (index, event) => {
        this.props.history.push(`blogs/${this.state.titles[index]}`);
    };

    render() {
        return (
        <article className="BlogList">
            {this.state.blogs.map((blog, index) =>
            <section key={index} onClick={(event) => {this.navToBlog(index, event)}}>
              <div>
                <a href={`#/blogs/${this.state.titles[index]}`}>{blog.header}</a>
              </div>
              
              {blog.chapters.map((chapter, index) =>
                <h4 key={index}>{chapter.components[0].props.title}</h4>
                ,{/* Implement small summary of each chapter
                <span>{chapter.components[1].props.content[0]}</span>
              */}
              )}
            </section>
            )}
        </article>
        );
    }
}

export default withRouter(BlogList);