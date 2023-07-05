import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

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
          {user === null ? (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Connexion
            </Button>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bonjour {user.prenom}
              </Typography>
              <Button color="inherit" onClick={() => navigate("/history")}>
                Historique
              </Button>
              <Button color="inherit" onClick={() => logout()}>
                Deconnexion
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
