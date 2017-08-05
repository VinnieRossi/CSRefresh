import React, {Component} from 'react';
import './ChapterHeader.scss';

class ChapterHeader extends Component {
  render() {
    return (
      <header className="chapterHeader">{this.props.title}</header>
    );
  }
}

export default ChapterHeader;
