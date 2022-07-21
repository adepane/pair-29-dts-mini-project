import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Series', link: '/tv' },
    { text: 'Movies', link: '/movies' },
];

const Menu = () => {
    return(
        <div>
            {navItems.map((item) => (
                <NavLink
                    to={item.link}
                    key={item.text}
                    className={({ isActive }) => isActive ? 'nav nav-active' : 'nav nav-inactive'}
                    color="info"
                    underline="none"
                >
                    {item.text}
                </NavLink>
            ))}
        </div>
    )
}

export default Menu;