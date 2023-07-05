import {
  TextField,
  Button,
  Stack,
  Box,
  Container,
  Typography,
  Alert,
} from "@mui/material";
// import { Link } from "react-router-dom"
// const lock = "../../images/lock.png"

interface InscriptionPageViewProps {
  nom: string;
  setNom: React.Dispatch<React.SetStateAction<string>>;
  prenom: string;
  setPrenom: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  naissance: string;
  setNaissance: React.Dispatch<React.SetStateAction<string>>;
  mdp: string;
  setMdp: React.Dispatch<React.SetStateAction<string>>;
  confirmationMdp: string;
  setConfirmationMdp: React.Dispatch<React.SetStateAction<string>>;
  isAddSuccessful: boolean;
  mdpMatch: boolean;
  handleSubmit: any;
  missingRequiredFields: boolean;
  userAlreadyExists: boolean;
}

export const InscriptionPageView = (props: InscriptionPageViewProps) => {
  const {
    nom,
    setNom,
    prenom,
    setPrenom,
    email,
    setEmail,
    naissance,
    setNaissance,
    mdp,
    setMdp,
    confirmationMdp,
    setConfirmationMdp,
    isAddSuccessful,
    mdpMatch,
    handleSubmit,
    missingRequiredFields,
    userAlreadyExists,
  } = props;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
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
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {/* action={<Link to="/login" />} */}
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Nom"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Prénom"
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            // sx={{mb: 3}}
          />
          {userAlreadyExists && (
            <Alert severity="error">
              Un utilisateur est dèja enregistré avec cet email
            </Alert>
          )}
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Date de naissance"
            id="naissance"
            type="date"
            variant="outlined"
            color="primary"
            onChange={(e) => setNaissance(e.target.value)}
            value={naissance}
            fullWidth
            required
            sx={{ mb: 4, mt: 4 }}
          />
          <TextField
            type="password"
            variant="outlined"
            color="primary"
            label="Mot de passe"
            onChange={(e) => setMdp(e.target.value)}
            value={mdp}
            required
            fullWidth
          />
          {!mdpMatch && (
            <Alert severity="error">
              Les mots de passe saisis ne correspondent pas
            </Alert>
          )}
          <TextField
            type="password"
            variant="outlined"
            color="primary"
            label="Confirmer le mot de passe"
            onChange={(e) => setConfirmationMdp(e.target.value)}
            value={confirmationMdp}
            required
            fullWidth
            sx={{ mt: 4 }}
          />
          {!mdpMatch && (
            <Alert severity="error">
              Les mots de passe saisis ne correspondent pas
            </Alert>
          )}
          {isAddSuccessful && (
            <Alert sx={{ mt: 2 }} severity="success">
              Utilisateur enregistré avec succès !
            </Alert>
          )}
          {missingRequiredFields && (
            <Alert sx={{ mt: 2 }} severity="error">
              Champ(s) obligatoire(s)* manquant(s)
            </Alert>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 4 }}
          >
            S'Inscrire
          </Button>
          {/* <small>Dèja inscrit? </small> */}
          {/* <Link to="/login">Login Here</Link> */}
        </Box>
      </Box>
    </Container>
  );
};
