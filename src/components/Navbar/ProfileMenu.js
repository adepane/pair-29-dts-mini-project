import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const ProfileMenu = (props) => {
  const userLogged = props.user;
  const username = userLogged.email.split("@")[0];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
        await signOut(auth);
        <Navigate to={'/'} />
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="text"
        color="info"
        style={{ textTransform: "capitalize" }}
      >
        Hi, {username}
        <img
          src="../../assets/images/ProfilePicture.png"
          alt="profile"
          style={{ height: "20px", marginLeft: "10px" }}
        />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
