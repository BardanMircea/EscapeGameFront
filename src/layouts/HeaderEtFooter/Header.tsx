import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

//import useLocalStorage from "../../hooks/useLocalStorage";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //const [value, setValue] = useLocalStorage("user", null);
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
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
                Bonjour {user.nom}
              </Typography>
              <Button color="inherit">Historique</Button>
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
