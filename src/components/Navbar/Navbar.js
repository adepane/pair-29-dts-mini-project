import { AppBar, Box, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import './style.css';



const Navbar = () => {
    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    return (
        <div sx={{flexGrow: 1}}>
            <AppBar 
                position="fixed"
                sx={{display: 'flex', padding: '10px 0', width: '100%'}}
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
                            {mobileView ? '' : <Menu />}
                            
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