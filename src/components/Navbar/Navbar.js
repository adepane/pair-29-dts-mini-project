import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
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
        <div sx={{flexGrow: 1}}>
            <AppBar 
                position="fixed"
                sx={{display: 'flex', padding: '10px 0'}}
            >
                <Toolbar className="nav-toolbar">
                    <div style={{width: '100%'}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                <Link to={'/'} className="nav nav-logo">
                                    Home
                                </Link>
                            </div>
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
                            <div sx={{ display: 'flex', flexWrap: 'wrap', }}>
                                <SearchBar/>
                                <Link to={'/login'} className="nav">Login</Link>
                            </div>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;