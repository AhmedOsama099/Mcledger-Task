import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

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
    <AppBar id="navbarId" position="static" className={styles.navbarWrapper}>
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
              ></Menu>
            </div>
          </Box>

          {/* Web View Tabs Handling */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className={styles.webLogo}>
              <img width={"100%"} src={logo} alt="logo" />
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
