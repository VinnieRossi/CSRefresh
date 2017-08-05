import React, {Component} from 'react';
import './Chapter.scss';
import ChapterHeader from '../ChapterHeader/ChapterHeader.jsx';
import TextContent from '../TextContent/TextContent.jsx';
import CodeSnippet from '../CodeSnippet/CodeSnippet.jsx';

/*

   Chapter only has one prop: {componentList}
   This is a list of all of the components that the chapter is comprised of. It then dynamically creates these components.
   Possible components are found within the component object below
*/

class Chapter extends Component {
  
  render() {
    // Should move this to a const file
    const components = {
      "ChapterHeader": ChapterHeader,
      "TextContent":   TextContent,
      "CodeSnippet":   CodeSnippet
    };
    
    return (
      <section className="chapter">
        {this.props.componentList.map(component =>
          React.createElement(components[component.componentType], component.props)
        )}
      </section>
    );
  }
}

export default Chapter;
