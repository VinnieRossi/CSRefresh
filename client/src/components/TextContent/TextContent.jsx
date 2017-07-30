import React, {Component} from 'react';
import './TextContent.scss';

class TextContent  extends Component {  
  render() {
    return (
      <div className="textContent">
        {this.props.content.map((paragraph, index) =>
        <p key={index}>{paragraph}</p>
        )}
      </div>
    );
  }
}

export default TextContent;
