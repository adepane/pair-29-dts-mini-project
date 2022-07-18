import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Series', link: '/series' },
    { text: 'Movies', link: '/movies' },
    { text: 'New and Popular', link: '/new-popular' },
    { text: 'My List', link: '/my-list' },
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