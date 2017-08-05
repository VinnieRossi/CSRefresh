import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <a href='Searches' className="link">Searches</a>
                <a href='Sorts' className="link">Sorts</a>
                <a href='Blogs' className="link">Blogs</a>
            </nav>
        );
    }
}

export default Navbar;