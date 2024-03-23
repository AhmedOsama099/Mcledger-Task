import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const pages = [
  { name: "Home", path: "/" },
  { name: "Market", path: "/Market" },
  { name: "About", path: "/About" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={styles.navbarWrapper}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile View Tabs Handling */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <div className={styles.mobileContainer}>
              {/* - Logo */}
              <div className={styles.mobileLogo}>
                <img width={"100%"} src={logo} alt="logo" />
              </div>
              {/* Burger Menu Button */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ name, path }) => (
                  <MenuItem key={path} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color={"white"}>
                      <Link className={styles.mobileLink} to={path}>
                        {name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Box>

          {/* Web View Tabs Handling */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className={styles.webLogo}>
              <img width={"100%"} src={logo} alt="logo" />
            </div>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className={styles.burgerButton}
              >
                <Typography textAlign="center" color={"white"}>
                  <Link className={styles.link} to={path}>
                    {name}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
