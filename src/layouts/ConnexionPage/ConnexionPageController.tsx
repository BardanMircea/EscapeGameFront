import {
  Button,
  TextField,
  Box,
  Grid,
  Link,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import LoginModel from "../../models/LoginModel";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const ConnexionController = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [missingRequiredFields, setMissingRequiredFields] = useState(false);
  const { user, login: loginConnexion, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // check if no fields are empty and if the provided passwords match
    if (!email || !mdp) {
      setMissingRequiredFields(true);
      return;
    }

    // build the Login request model
    const login: LoginModel = new LoginModel(email, mdp);

    // set the url and the options needed to do the request
    const url = `http://localhost:3000/login`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };

    // send the request to our backend api and store the received response in a variable
    const response = await fetch(url, requestOptions);
    const userLogin = await response.json();

    // Check status of response
    if (response.status == 404) {
      setUserAlreadyExists(true);
      return;
    }
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    if (response.status == 200) {
      // sauvegarder dans le localStorage
      loginConnexion(userLogin);
      navigate("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="lock-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAb1BMVEX///+AAIB0AHR5AHl8AHziz+Ly7fLWwtbWu9bBmcGoc6jZw9m0f7T++/7s3+zcxdyvd6/59PnGn8bPrs/UtdTm1eby6fKJJ4mTRJOkZKSYS5iPN4+DF4O+kb7JpcmZUZmpb6mgW6CJLomiZ6K0hrTHpscrAAAEWklEQVRoge2baXPbIBCGJUCpnehCtg7bkq/o///GWpm0BQRiEYszbfN+yEzGgoflWJYrilYqL87btHwth/MmX5vHKmVF2TJGKWPTX8raMsmehG6qE6WxJMq63csz2NtWIX/y71Vw6+s70aEnkTYJyx6M6A98GhDdHLU1LtR914Ri5y1bZscxa+tA7N7KftDjIPQGwp7wAXwOt9f5p3r0ds86KDtmJ44MTy39XBS94rI3DuwHvcJkc02ds8e80vePmUXzG8Vs9uvMcEa6KsmbJi+qjsx/veCxE9WpMjYKtvGBqdaTHRY769RavSnVyg9q8VqsHr9Tcmaa/rRTy7fFYXNliLO97quNajpOn1OGGdGyo6iQP0MabrLhxJip0jp3jMAmkdjsYP6ylGynhhpykpwlW2jKrJe+PPqzuUNL7uVy+s+tcne7Lw/fIwMXFKRXKb+zQ0nZyRsuG24ZvLIvJL5eTnLr1Boab8WymjwCWFJu1Boc5mIjMd8w/l3MrbPWY3YU6/3o52d472jJKPURv0ZvXNuwEPsI8Yvh5bwAExUnjqVdUCXVIiTFSeyggxdcjJiX5pQ/Ep0Su3rBpaxGSIqtc3FNym4CHOarpcnl4tPduThsYRO05BLtjmEJLnYfUkCS1CLcK5BrWhEOGrW5CPea0hvRwdFNApDU5tQHnsSiCEixVN7V6Hy2DnEWua30sJVu/ekqRsYVUxs/OC3JzZot7J7IXrM5h8d+0C9uNT8gsh/00oWde3dzWcRlS/iA0M9FuSydsA13Mh23xSfBo2iu7sEgCLwr+YJe6w47cyHgBDq/BYFDJ5ggcGh3DwIHxWCh4G//LfzHPwWfTpG/Bk5J/z6OZTvf6g8Op/3w6TAbw7FyODgdhYmCD/bKR4RTxWUUVjoifOauElsKNLhuE3RnaXcsOLvpEs1Pv8LAtRNU/hTL2U2/BFiOeJHgpq0Z9QAsCNwUkyzH21iWG27jvCz2OKw2NwTBfClRaMv5suU4wYQpCG6WU+HAqeF0etnHIcFNG6rvy+McK4bT1rvNwyHB9aaXFt+OFbczTavbZnS8RcN8asl7SxLEFYt6wNbYIxnE5ZKcV2KPIDHh8n0MwN2lb/jXwMGbA/a8vuF/CRy8G/WlcGtWK+DQTUBumyWm8+GNoJt9iQze/pQOMY25CQJ8Dr/BcEXe6zevsTSyrXfd5XBViaPvhUGuW/xSiX3Gol3SG1Qjmw6e0z4EGDwOYp0LO6ox2Ya9DLMwD5jcDhQjp/vsVrnf/rVG4mCxFef3BVKPJ6uuLuxR6LZrkyZVCJ1u/d0sfx/vc/00ib36PGNOnk1Vc/FoeHL0vWY+fzIANnvwv+dd255q6UWPOK/X9r0znvZoLyqiXezU9CReObgN2l9gR1jTkdcF41q9pCxPZ48yNWR6GvMgDyV5kXbMWIDpnWqXJtgvtkTV+/LUf7yEFTT925/STRibZfH67bxNX38r3Z6Leo3FPwFEmEHLgdec/QAAAABJRU5ErkJggg=="
          alt=""
        />
        <Typography component="h1" variant="h5"></Typography>

        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            onChange={(e) => setMdp(e.target.value)}
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Connexion
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Pas de compte? Inscrivez-vous"}
              </Link>
            </Grid>
          </Grid>

          {userAlreadyExists && (
            <Alert severity="error">
              Email et/ou mot de passe non reconnu(es)
            </Alert>
          )}
          {missingRequiredFields && (
            <Alert sx={{ mt: 2 }} severity="error">
              Champ(s) obligatoire(s)* manquant(s)
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ConnexionController;
