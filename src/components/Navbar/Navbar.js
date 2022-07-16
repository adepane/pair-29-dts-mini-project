import { AppBar, Toolbar } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import './style.css';

const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Series', link: '/series' },
    { text: 'Movies', link: '/movies' },
    { text: 'New and Popular', link: '/new-popular' },
    { text: 'My List', link: '/my-list' },
];

const Navbar = () => {

    return (
        <AppBar 
            position="fixed"
            sx={{height: "15vh", flexBasis: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
        >
            <Toolbar variant="dense">
                {navItems.map((item) => (
                    <NavLink
                        to={item.link}
                        key={item.text}
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
                    >
                        {item.text}
                    </NavLink>
                ))}
                <Link to={'/login'} color="inherit" sx={{justifyContent:'flex-end'}}>Login</Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;