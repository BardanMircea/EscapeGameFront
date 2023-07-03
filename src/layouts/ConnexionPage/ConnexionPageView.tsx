import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ConnexionView = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
        <img className='lock-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAb1BMVEX///+AAIB0AHR5AHl8AHziz+Ly7fLWwtbWu9bBmcGoc6jZw9m0f7T++/7s3+zcxdyvd6/59PnGn8bPrs/UtdTm1eby6fKJJ4mTRJOkZKSYS5iPN4+DF4O+kb7JpcmZUZmpb6mgW6CJLomiZ6K0hrTHpscrAAAEWklEQVRoge2baXPbIBCGJUCpnehCtg7bkq/o///GWpm0BQRiEYszbfN+yEzGgoflWJYrilYqL87btHwth/MmX5vHKmVF2TJGKWPTX8raMsmehG6qE6WxJMq63csz2NtWIX/y71Vw6+s70aEnkTYJyx6M6A98GhDdHLU1LtR914Ri5y1bZscxa+tA7N7KftDjIPQGwp7wAXwOt9f5p3r0ds86KDtmJ44MTy39XBS94rI3DuwHvcJkc02ds8e80vePmUXzG8Vs9uvMcEa6KsmbJi+qjsx/veCxE9WpMjYKtvGBqdaTHRY769RavSnVyg9q8VqsHr9Tcmaa/rRTy7fFYXNliLO97quNajpOn1OGGdGyo6iQP0MabrLhxJip0jp3jMAmkdjsYP6ylGynhhpykpwlW2jKrJe+PPqzuUNL7uVy+s+tcne7Lw/fIwMXFKRXKb+zQ0nZyRsuG24ZvLIvJL5eTnLr1Boab8WymjwCWFJu1Boc5mIjMd8w/l3MrbPWY3YU6/3o52d472jJKPURv0ZvXNuwEPsI8Yvh5bwAExUnjqVdUCXVIiTFSeyggxdcjJiX5pQ/Ep0Su3rBpaxGSIqtc3FNym4CHOarpcnl4tPduThsYRO05BLtjmEJLnYfUkCS1CLcK5BrWhEOGrW5CPea0hvRwdFNApDU5tQHnsSiCEixVN7V6Hy2DnEWua30sJVu/ekqRsYVUxs/OC3JzZot7J7IXrM5h8d+0C9uNT8gsh/00oWde3dzWcRlS/iA0M9FuSydsA13Mh23xSfBo2iu7sEgCLwr+YJe6w47cyHgBDq/BYFDJ5ggcGh3DwIHxWCh4G//LfzHPwWfTpG/Bk5J/z6OZTvf6g8Op/3w6TAbw7FyODgdhYmCD/bKR4RTxWUUVjoifOauElsKNLhuE3RnaXcsOLvpEs1Pv8LAtRNU/hTL2U2/BFiOeJHgpq0Z9QAsCNwUkyzH21iWG27jvCz2OKw2NwTBfClRaMv5suU4wYQpCG6WU+HAqeF0etnHIcFNG6rvy+McK4bT1rvNwyHB9aaXFt+OFbczTavbZnS8RcN8asl7SxLEFYt6wNbYIxnE5ZKcV2KPIDHh8n0MwN2lb/jXwMGbA/a8vuF/CRy8G/WlcGtWK+DQTUBumyWm8+GNoJt9iQze/pQOMY25CQJ8Dr/BcEXe6zevsTSyrXfd5XBViaPvhUGuW/xSiX3Gol3SG1Qjmw6e0z4EGDwOYp0LO6ox2Ya9DLMwD5jcDhQjp/vsVrnf/rVG4mCxFef3BVKPJ6uuLuxR6LZrkyZVCJ1u/d0sfx/vc/00ib36PGNOnk1Vc/FoeHL0vWY+fzIANnvwv+dd255q6UWPOK/X9r0znvZoLyqiXezU9CReObgN2l9gR1jTkdcF41q9pCxPZ48yNWR6GvMgDyV5kXbMWIDpnWqXJtgvtkTV+/LUf7yEFTT925/STRibZfH67bxNX38r3Z6Leo3FPwFEmEHLgdec/QAAAABJRU5ErkJggg==" alt="" />
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Mot de passe oublié?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Pas de compte? Inscrivez-vous"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

    
  );
};

export default ConnexionView;
