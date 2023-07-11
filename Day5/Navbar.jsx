import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FaServicestack } from "react-icons/fa6";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";

const pages = ["Services", "Customer Support", "About "];
const settings = [
  {
    label: "Profile",
    route: "/profile",
  },
  {
    label: "Payment History",
    route: "/payment-history",
  },
  {
    label: "Logout",
    route: "/logout",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F6F7",
    },
    secondary: {
      main: "#EF233C",
    },
  },
});

function Navbar() {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <FaServicestack size={40} />
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                2018
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                2018
              </Typography>
              <Box
                sx={{
                  ml: 75,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                  <Button
                    key="services"
                    sx={{ my: 2, color: "black", display: "block" }}
                    href="#services-start"
                    style={{scrollBehavior:"smooth"}}
                  >
                    Services
                  </Button>
                  <Button
                    key="customer support"
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Customer Support
                  </Button>
              </Box>
              {isAuthenticated ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={isAuthenticated && user.picture}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem key="profile" onClick={handleCloseUserMenu}>
                      <Link to="/profile">
                        <Typography textAlign="center">Profile</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu}
                    >
                      <Link to="/payment-history">
                        <Typography textAlign="center">
                          Payment History
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="Booked-Services"
                      onClick={handleCloseUserMenu}
                    >
                      <Link to="/booked-services">
                        <Typography textAlign="center">
                          Booked Services
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem key="logout" onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={() => logout()}>
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key="Login"
                  sx={{ display: "block" }}
                  color="secondary"
                  variant="contained"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default Navbar;
