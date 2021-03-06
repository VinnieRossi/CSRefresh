import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

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
        contentList: [],
        contentType: "",
        titles: []
      };
    }

    retrieveContent(contentType) {
      fetch(`/${contentType}/`)
          .then(res => res.json())
          .then(response => {
            this.setState({
              contentList: Object.values(response),
              titles: Object.keys(response)
            });
          });
      this.setState({contentType: contentType});
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.contentType !== this.props.match.params.contentType) {
        this.retrieveContent(nextProps.match.params.contentType);
      }
    }

    componentDidMount() {
      this.retrieveContent(this.props.match.params.contentType);
    }

    render() {
        return (
        <article className="BlogList">
            {this.state.contentList.map((content, index) =>
            <section key={index}>
              <div>
                <Link to={`/${this.state.contentType}/${this.state.titles[index]}`}>{content.header}</Link>
              </div>

              {content.chapters.map((chapter, index) =>
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