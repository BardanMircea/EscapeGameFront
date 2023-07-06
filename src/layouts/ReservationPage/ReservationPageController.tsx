import { Card, CardMedia, CardContent, Typography, Button, CardActions, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { Link, json, useParams } from "react-router-dom"
import ParticipantModel from "../../models/ParticipantModel"

const ReservationPageController = () => {
    // get the salle_id passed as a parameter from the details page when clicking on a time window(creneau horaire)
    const {salle_id, salle_nom, salle_capacite, salle_img, jour, creneau} = useParams()
    const parts = salle_capacite?.split("-")
    
    const minNumberPart : number = parts ? parseInt(parts[0]) : 0
    const maxNumberPart : number = parts ? parseInt(parts[1]) : 0

    const values : number[] = populateValues(minNumberPart, maxNumberPart)

    const [selectedNumberOfParticipants, setSelectedNumberOfParticipants] = useState< | "" | "value" | undefined>("")
    const [showInputsForm, setShowInputsForm] = useState(false);
    const [participants, setParticipants] = useState<ParticipantModel[]>([])

    // function to pupulate an array with numbers ranging between the minimum and the maximum capacity of the room
    function populateValues(min : number, max: number): number[] {
        const result = []
        for(let i = min; i <= max; i++){
            result.push(i)
        }
        return result
    } 

    // function to set how many Participant input fields to display
    function changeNumberOfParticipants(event : any): void {
        const value = event.target.value as "" | "value";
        setSelectedNumberOfParticipants(value);
        setShowInputsForm(value !== "")
        const participantsArr : ParticipantModel[] = []
        for(let i = 0; i < parseInt(value); i++){
            participantsArr.push(new ParticipantModel(participantsArr.length, "", "", "", ""))
        }

        setParticipants(participantsArr)
    }

    async function submitReservation(event: any) {
        // event.preventDefault()
        // const requestOptions = {
        //     method : "POST",
        //     headers : { "Content-Type": "application/json" },
        //     body : JSON.stringify()
        // }
        // const submitReservationResponse = await fetch()
    }

    function updateParticipantNom(id: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const participantsCopy = [... participants]
        
        participantsCopy[id].nom = event.target.value
        setParticipants(participantsCopy)
    }

    function updateParticipantPrenom(id: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const participantsCopy = [... participants]
        
        participantsCopy[id].prenom = event.target.value
        setParticipants(participantsCopy)
    }

    function updateParticipantNaissance(id: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const participantsCopy = [... participants]
        
        participantsCopy[id].naissance = event.target.value
        setParticipants(participantsCopy)
    }

    return(
        <>
            <h1>{ <span style={{color: "rgb(124, 31, 124)"}}>{salle_nom}</span>}  Escape Room</h1>
            <div className="card-details-container">
                <Card sx={{ width: 1000, maxWidth: 1200, maxHeight: 10000, mb: 5 }}>
                    <CardMedia component="img" height="500" image={salle_img || "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"} alt="escape room img" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {salle_nom}
                        </Typography>
                        <p style={{ fontSize: 20 }}>
                        Vous allez réserver la salle <span style={{ color: "green" }}> <i>{salle_nom}</i></span>, pour <span style={{ color: "green" }}> <i>{jour} {creneau}</i></span>
                        </p>
                        <br />
                        <p style={{ fontSize: 20 }}>
                        Le nombre de participants doit entre compris entre <span style={{ color: "green" }}> <i>{salle_capacite}</i></span>
                        </p>
                        <FormControl sx={{ m: 1, width: "100%" }} size="small">
                        <InputLabel id="demo-select-small-label">Nombre de participants</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={selectedNumberOfParticipants}
                            label="Nombre de participants"
                            onChange={changeNumberOfParticipants}
                        >
                            {values.map((value) => (
                            <MenuItem value={value} key={value}>
                                {value}
                            </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                        {showInputsForm && (
                        <>  
                            <h2>Liste des participants</h2>
                            {participants.map( participant => (
                            <div className="participants-input-container" key={participant.id}>
                                <TextField label={`Nom`} variant="outlined" value={participant.nom} onChange={(event) => updateParticipantNom(participant.id, event)}/>
                                <TextField label={`Prenom`} variant="outlined" value={participant.prenom}onChange={(event) => updateParticipantPrenom(participant.id, event)}/>
                                <TextField label={`Date de naissance`} variant="outlined" value={participant.naissance}onChange={(event) => updateParticipantNaissance(participant.id, event)}/>
                            </div>
                            ))}
                        </>
                        )}
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <Button component={Link} to="#" size="small" color="primary" onClick={submitReservation}>
                        Resérver
                        </Button>
                    </CardActions>
                </Card>
            </div>  
        </>
    )
}
export default ReservationPageController