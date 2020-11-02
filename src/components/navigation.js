import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

function Navigation (){
    return(
        <div className="nav">
            <Link to="/" className="nav__items">Home</Link>
            <Link to="/about" className="nav__items">About</Link>
        </div>
    )
}

export default Navigation;