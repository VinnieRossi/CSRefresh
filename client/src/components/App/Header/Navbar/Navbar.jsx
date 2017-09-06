import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <Link to='/' className="link">Home</Link>
                <Link to='/lists/data-structures' className="link">Data Structures</Link>
                <Link to='/lists/algorithms' className="link">Algorithms</Link>
                <Link to='/lists/blogs' className="link">Blogs</Link>
            </nav>
        );
    }
}

export default Navbar;