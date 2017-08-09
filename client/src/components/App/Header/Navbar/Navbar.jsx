import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <a href='#/' className="link">Home</a>
                <a href='#/lists/searches' className="link">Searches</a>
                <a href='#/lists/sorts' className="link">Sorts</a>
                <a href='#/lists/blogs' className="link">Blogs</a>
            </nav>
        );
    }
}

export default Navbar;