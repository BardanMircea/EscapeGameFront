import { Card, CardActionArea, CardMedia, CardContent, Typography, ButtonGroup, Button, CardActions } from "@mui/material"
import { Link } from "react-router-dom"
import SalleModel from "../../models/SalleModel"
import JourModel from "../../models/JourModel"

interface SalleDetailsPageViewProps {
    salle : SalleModel | undefined
    horaire : JourModel[]
}

const SalleDetailsPageView = (props : SalleDetailsPageViewProps) => {

    const {salle, horaire} = props
    const creneaux = ["Matin", "Apres-Midi"]

    return(
        <>
            <h1>{`${salle?.nom} Escape Room`}</h1>
            <div className="card-details-container">
                <Card sx={{width: 1000, maxWidth: 1200, maxHeight: 1000, mb:5}} >
                        <CardMedia
                        component="img"
                        height="500"
                        image={ salle?.img ? salle.img : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"}
                        alt="escape room img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {salle?.nom}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 100, WebkitBoxOrient: "vertical"}}
                            >
                                {salle?.description}
                            </Typography>
                        </CardContent>
                        <h3>Disponibilité:</h3>
                        <div className="week-container">
                            {horaire.map((jour) => 
                                <div className="day-container" key={jour.nom}>
                                    <h3>{jour.nom}</h3>
                                    <ButtonGroup orientation="vertical" variant="contained"aria-label="vertical contained button group">
                                        {jour.disponibleMatin ? 
                                            <Button component={Link} to={`/reservation/${salle?._id}/${salle?.nom}/${salle?.capacite}/${encodeURIComponent(salle?.img || "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg")}/${jour.nom}/${creneaux[0]}`} style={{backgroundColor:"green"}}>Matin</Button> 
                                            : 
                                            <Button disabled>Matin</Button>}
                                        {jour.disponibleAprem ? 
                                            <Button component={Link} to={`/reservation/${salle?._id}/${salle?.nom}/${salle?.capacite}/${encodeURIComponent(salle?.img || "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg")}/${jour.nom}/${creneaux[1]}`} style={{backgroundColor:"green"}}>Apres-midi</Button> 
                                            :
                                            <Button disabled>Apres-midi</Button>}
                                    </ButtonGroup>
                                </div>
                            )}
                        </div>
                    <CardActions sx={{display:"flex", justifyContent:"center", mt:2}}>
                        <Button component={Link} to="/" size="small" color="primary"  >
                            Retour
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}
export default SalleDetailsPageView