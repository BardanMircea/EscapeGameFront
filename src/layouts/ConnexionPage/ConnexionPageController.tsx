import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import LoginModel from "../../models/LoginModel";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const ConnexionController = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [missingRequiredFields, setMissingRequiredFields] = useState(false);
  const [value, setValue] = useLocalStorage("user", null);

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
    if (response.status == 404) {
      setUserAlreadyExists(true);
      return;
    } else if (!response.ok) {
      throw new Error("something went wrong");
    } else if (response.status == 200) {
      // sauvegarder dans le localStorage
      setValue(userLogin);
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
