import { AppBar, Box, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import './style.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const profileComponenet = user ? (
      <ProfileMenu user={user}/>
    ) : (
      <Link to={"/login"} className="nav">
        Login
      </Link>
    );
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
      <div sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ display: "flex", padding: "10px 0", width: "100%" }}
        >
          <Toolbar className="nav-toolbar">
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Link to={"/"} className="nav nav-logo">
                    Home
                  </Link>
                </div>
                {mobileView ? "" : <Menu />}

                <div sx={{ display: "flex", flexWrap: "wrap" }}>
                  {/* <SearchBar /> */}
                  {profileComponenet}
                </div>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Navbar;