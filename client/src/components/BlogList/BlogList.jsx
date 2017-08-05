import React, {Component} from 'react';

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
    render() {
        return (
        <article>
            <p> These are all of my blogs: </p>
            {this.state.blogs.map((blog, index) =>
            <section key={index}>
              <a href={`#/blogs/${this.state.titles[index]}`}>{blog.header}</a>
              <br />
            </section>
            )}
        </article>
        );
    }
}

export default BlogList;