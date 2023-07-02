import { TextField, Button, Stack, Box, Container, Typography, Alert} from '@mui/material';
// import { Link } from "react-router-dom"
// const lock = "../../images/lock.png"

interface InscriptionPageViewProps{
    nom : string 
    setNom : React.Dispatch<React.SetStateAction<string>>
    prenom : string
    setPrenom : React.Dispatch<React.SetStateAction<string>>
    email: string 
    setEmail: React.Dispatch<React.SetStateAction<string>>
    naissance: string 
    setNaissance: React.Dispatch<React.SetStateAction<string>>
    mdp: string
    setMdp: React.Dispatch<React.SetStateAction<string>>
    confirmationMdp: string
    setConfirmationMdp: React.Dispatch<React.SetStateAction<string>>
    isAddSuccessful : boolean
    mdpMatch: boolean
    handleSubmit: any
    missingRequiredFields: boolean
    userAlreadyExists: boolean
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
    } = props

    return(
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
            <Typography component="h1" variant="h5">
            Inscription
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                {/* action={<Link to="/login" />} */}
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Nom"
                        onChange={e => setNom(e.target.value)}
                        value={nom}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Prénom"
                        onChange={e => setPrenom(e.target.value)}
                        value={prenom}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    // sx={{mb: 3}}
                />
                {userAlreadyExists && <Alert severity="error">Un utilisateur est dèja enregistré avec cet email</Alert>}
                <TextField
                    InputLabelProps={{shrink:true}}
                    label="Date de naissance"
                    id="naissance"
                    type="date"
                    variant='outlined'
                    color='primary'
                    onChange={e => setNaissance(e.target.value)}
                    value={naissance}
                    fullWidth
                    required
                    sx={{mb: 4, mt:4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='primary'
                    label="Mot de passe"
                    onChange={e => setMdp(e.target.value)}
                    value={mdp}
                    required
                    fullWidth
                />
                {!mdpMatch && <Alert severity="error">Les mots de passes saisis ne correspondent pas</Alert>}
                <TextField
                    type="password"
                    variant='outlined'
                    color='primary'
                    label="Confirmer le mot de passe"
                    onChange={e => setConfirmationMdp(e.target.value)}
                    value={confirmationMdp}
                    required
                    fullWidth
                    sx={{mt: 4}}
                />
                 {!mdpMatch && <Alert severity="error">Les mots de passes saisis ne correspondent pas</Alert>}
                 {isAddSuccessful && <Alert sx={{mt:2}}  severity="success">Utilisateur enregistré avec succès !</Alert>}
                 {missingRequiredFields && <Alert sx={{mt:2}} severity="error">Champ(s) obligatoire(s)* manquant(s)</Alert>}
                <Button fullWidth variant="contained" color="primary" type="submit" sx={{mt: 4}}>S'Inscrire</Button>
                {/* <small>Dèja inscrit? </small> */}
                {/* <Link to="/login">Login Here</Link> */}
            </Box>
          </Box>
        </Container>
    );
} 