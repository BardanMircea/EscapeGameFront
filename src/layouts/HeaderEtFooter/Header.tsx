import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Handle menu open event
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close event
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              underline="none"
              color="inherit"
              onClick={() => navigate("/")}
            >
              Escape Game
            </Link>
          </Typography>
          {/* Menu icon for small screens */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {user === null
              ? [
                  <MenuItem
                    key="login"
                    onClick={() => {
                      handleMenuClose();
                      navigate("/login");
                    }}
                  >
                    Connexion
                  </MenuItem>,
                ]
              : [
                  <MenuItem
                    key="history"
                    onClick={() => {
                      handleMenuClose();
                      navigate("/history");
                    }}
                  >
                    Historique
                  </MenuItem>,
                  <MenuItem
                    key="logout"
                    onClick={() => {
                      handleMenuClose();
                      logout();
                    }}
                  >
                    Déconnexion
                  </MenuItem>,
                ]}
          </Menu>
          {/* Login button for normal screens */}
          {user === null ? ( // If user is not logged in
            <Button
              color="inherit"
              onClick={() => navigate("/login")}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Connexion
            </Button>
          ) : (
            // If user is logged in
            <>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Bonjour {user.prenom}
              </Typography>
              <Button
                color="inherit"
                onClick={() => navigate("/history")}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Historique
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Déconnexion
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
