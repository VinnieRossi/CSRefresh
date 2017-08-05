import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <a href='#/' className="link">Home</a>
                <a href='#/searches' className="link">Searches</a>
                <a href='#/sorts' className="link">Sorts</a>
                <a href='#/blogs' className="link">Blogs</a>
            </nav>
        );
    }
}

export default Navbar;