import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav>
            <NavLink  to={'/'}>Home</NavLink>
            <NavLink to={'/food'}>Food</NavLink>
            <NavLink to={'/AllFood'}>AllFood</NavLink>
            </nav>
            
            
        </div>
    );
};

export default Header;