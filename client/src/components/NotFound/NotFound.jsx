import React, {Component} from 'react';
import img from '../../../images/wot.png';

class NotFound extends Component {
    render() {
        return (
        <article>
            <h1>Page not found</h1>
            <section>
                <p>Woops! Looks like the page you were trying to reach doesn't exist...yet! 
                <br />
                Try back in the future. Or never.</p>
                <img alt='Silly 404 description' src={img} />
            </section>
        </article>
        );
  }
}

export default NotFound;