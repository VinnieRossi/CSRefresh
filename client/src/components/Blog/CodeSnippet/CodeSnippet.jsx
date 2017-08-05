import React, {Component} from 'react';
import {PrismCode} from 'react-prism';
import './CodeSnippet.scss';

class CodeSnippet extends Component {
  render() {
    return (
      <div className="codeSnippet">
        <pre>
        <PrismCode className="language-javascript">
          {this.props.code}  
        </PrismCode>
      </pre>
    </div>
    );
  }
}

export default CodeSnippet;
