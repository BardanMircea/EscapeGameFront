import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, ButtonGroup} from "@mui/material"
import {Link, useParams} from "react-router-dom"
import SalleModel from "../../models/SalleModel"
import JourModel from "../../models/JourModel"
import { useEffect, useState } from "react"

const SalleDetailsPageController = () => {
    // initialize a week variable
    const semaine = [new JourModel("Lundi"), new JourModel("Mardi"), new JourModel("Mercredi"), new JourModel("Jeudi"), new JourModel("Vendredi"), new JourModel("Samedi"), new JourModel("Dimanche")]

    // state for salle and horaire
    const [salle,  setSalle] = useState<SalleModel>()
    const [horaire, setHoraire] = useState(semaine)
    
    // get the salle_id passed as a parameter from the home page when clicking a salle button
    const {salle_id} = useParams()

    // function to call our back end for the given salle, using the salle_id
    const fetchSalle = async() => {
        const response = await fetch(`http://localhost:3000/salles/${salle_id}`)
        if(!response.ok) {
            throw new Error("Erreur imprevue survenue")
        }
        const responseJson = await response.json() 
        const salle = new SalleModel(responseJson._id, responseJson.nom, responseJson.description, responseJson.capacite, responseJson.img)
        setSalle(salle)
    }   

    // function to call our back end for all the reservations in which this room was booked
    const getSalleHoraire = async() => {
        const reservationsResponse= await fetch(`http://localhost:3000/reservations/salle/${salle_id}`)

        if(!reservationsResponse.ok) {
            throw new Error("Erreur imprevue survenue")
        }

        const reservations = await reservationsResponse.json()

        // for every day of the week, if the Salle is booked for that day, mark the morning or the afternoon as unavailable, accordingly
        semaine.forEach(jour => {
            reservations.forEach((reservation : any) => {
                if(jour.nom === reservation.jour){
                    if(reservation.creneau === "matin") jour.setDisponibleMatin(false)
                    else jour.setDisponibleAprem(false)
                } 
            })
        })

        // set our horaire to match the updated week schedule
        setHoraire(semaine)
    }

    // useEffect to update the Room and the room Schedule
    useEffect(() => {-
        fetchSalle()
        getSalleHoraire()
    }, [salle_id])

    return(
        <>
            <h1>{`${salle?.nom} Escape Room`}</h1>
            <div className="card-details-container">
            <Card sx={{width: 1000, maxWidth: 1200, maxHeight: 1000, mt:5, mb:5}} >
                <CardActionArea>
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
                                    {jour.disponibleMatin ? <Button style={{backgroundColor:"green"}}>Matin</Button> : <Button disabled>Matin</Button>}
                                    {jour.disponibleAprem ? <Button style={{backgroundColor:"green"}}>Apres-midi</Button> : <Button disabled>Apres-midi</Button>}
                                </ButtonGroup>
                            </div>
                        )}
                    </div>
                </CardActionArea>
                <CardActions sx={{display:"flex", justifyContent:"center", mt:2}}>
                    <Button component={Link} to="#" size="small" color="primary"  >
                        Resérver
                    </Button>
                </CardActions>
            </Card>
        </div>
    
        </>
        )
}

export default SalleDetailsPageController