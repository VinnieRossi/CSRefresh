import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.takeMeHome = this.takeMeHome.bind(this);
    }

    takeMeHome = (event) => {
        this.props.history.push('/#');
    };

    render() {
        return (
        <header className="header grid-12">
          <h2 onClick={this.takeMeHome}>Review Core CS Quickly</h2>
          <Navbar></Navbar>
        </header>
        );
    }
}

export default withRouter(Header);