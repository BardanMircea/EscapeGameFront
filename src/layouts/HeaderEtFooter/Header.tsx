import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const Header = () => {
  const [value, setValue] = useLocalStorage("user", null);

  // useEffect(() => {
  //   console.log("ho");
  // }, [value]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="#" underline="none" color="inherit">
              Escape Game
            </Link>
          </Typography>
          {value === null ? (
            <Button color="inherit">Connexion</Button>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bonjour {value.nom}
              </Typography>
              <Button color="inherit">Historique</Button>
              <Button color="inherit" onClick={() => setValue(null)}>
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
