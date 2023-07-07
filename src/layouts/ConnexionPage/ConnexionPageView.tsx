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
import LockPersonIcon from "@mui/icons-material/LockPerson";

interface ConnexionPageViewProps {
  handleSubmit: (e: any) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMdp: React.Dispatch<React.SetStateAction<string>>;
  userExists: boolean;
  missingRequiredFields: boolean;
}

const ConnexionPageView = (props: ConnexionPageViewProps) => {
  const { handleSubmit, setEmail, setMdp, userExists, missingRequiredFields } =
    props;
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
        <Typography component="h1" variant="h5">
          <LockPersonIcon />
        </Typography>

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

          {userExists && (
            <Alert sx={{ mt: 2 }} severity="error">
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

export default ConnexionPageView;
