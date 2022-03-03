import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div style={{background : '#ffad16'}}>
        <ul className="nav justify-content-start">
            <li className="nav-item">
                <Link to="/" className="nav-link active">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/products" className="nav-link">
                    Products
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/comments" className="nav-link">
                    Comments
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;