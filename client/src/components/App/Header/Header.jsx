import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import './Header.scss';
import Navbar from './Navbar/Navbar.jsx';


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
        <header className="Header grid-12">
          <h2 onClick={this.takeMeHome}>Where to go to review all core Computer Science concepts</h2>
          <Navbar></Navbar>
        </header>
        );
    }
}

export default withRouter(Header);