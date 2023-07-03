import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
const isLogin = true;

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="#" underline="none" color="inherit">
              Escape Game
            </Link>
          </Typography>
          {!isLogin ? (
            <Button color="inherit">Connexion</Button>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bonjour Mircea
              </Typography>
              <Button color="inherit">Historique</Button>
              <Button color="inherit">Deconnexion</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
