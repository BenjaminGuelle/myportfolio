import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav() {
    return (
        <header className="nav">
            <Link to="/" className="navlink backhome">benjaminguelle.com</Link>
            <div className="navlinks">
                <Link to="/portfolio" className="navlink link-portfolio">portfolio</Link>
                <Link to="/moi" className="navlink link-moi">me connaître</Link>
            </div>
            <Link to="/contact" className="nav-contact">contact</Link>
        </header>
    )
}

export default Nav
