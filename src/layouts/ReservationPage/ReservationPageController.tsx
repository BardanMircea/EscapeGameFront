import { Card, CardMedia, CardContent, Typography, Button, CardActions, FormControl, InputLabel, MenuItem, Select, TextField, Alert } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ParticipantModel from "../../models/ParticipantModel"
import ReservationModel from "../../models/ReservationModel"

const ReservationPageController = () => {
    // get the salle_id passed as a parameter from the details page when clicking on a time window(creneau horaire)
    const {salle_id, salle_nom, salle_capacite, salle_img, jour, creneau} = useParams()

    // decode the encoded image 
    const decodedImg = salle_img ? salle_img : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg";
    const navigate = useNavigate()

    const parts = salle_capacite?.split("-")    
    const minNumberPart : number = parts ? parseInt(parts[0]) : 0
    const maxNumberPart : number = parts ? parseInt(parts[1]) : 0
    // let isOfLegalAge : boolean =  true
    const values : number[] = populateValues(minNumberPart, maxNumberPart)

    const [selectedNumberOfParticipants, setSelectedNumberOfParticipants] = useState< | "" | "value" | undefined>("")
    const [showInputsForm, setShowInputsForm] = useState(false);
    const [participants, setParticipants] = useState<ParticipantModel[]>([])
    let isAddSuccessful = false;
    

    // function to populate an array with numbers ranging between the minimum and the maximum capacity of the room
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
        console.log(participantsArr)

        setParticipants(participantsArr)
    }

    //check if at least one Participant is of legal age
    // function isParticipantMajorityVerified() {
    //     const today = new Date();

    //     participants.forEach((participant) => {
    //         const dateOfBirth = new Date(participant.naissance);
    //         const age = today.getFullYear() - dateOfBirth.getFullYear();

    //         // Compare the age by subtracting the birth year from the current year
    //         console.log(age)
    //         if(isNaN(age)){
    //             return false
    //         }

    //         if (age >= 18) {
    //         return true; // At least one participant is of legal age
    //         }
            
    //     })

    //     // no participant is of legal age
    //     return false
    // }

    // check if there are any required fields missing, if so, return
    function isMissingRequiredFields() {
        if(participants.length === 0) return true
        let result = false

        participants.forEach(participant => {
            if(!participant.nom || !participant.prenom || !participant.naissance){
                result = true
            }
        })
        return result
    }


    async function submitReservation(event: any) {
        event.preventDefault()

        // if(!isParticipantMajorityVerified()){
        //     isOfLegalAge = false
        //     return
        // }

        // get the user id from localStorage
        let idUtilisateur= "";
        const data = localStorage.getItem("user");
        if (data) {
            const parsedData = JSON.parse(data);
            idUtilisateur = parsedData._id;
        } else {
            throw new Error("Aucune valeur trouvée dans le localStorage");
        }

        // create the reservation object to send to the back end
        const reservation : ReservationModel = {
            salleId : salle_id,
            jour : jour,
            creneau : creneau,            
            utilisateurId : idUtilisateur
        }

        // create request options for the reservation request
        const reservationRequestOptions = {
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify(reservation)
        }

        // post the reservation and retrieve the reservation id in the reservationResponse
        const submitReservationResponse = await fetch(`http://localhost:3000/reservations`, reservationRequestOptions)


        // check if the response is ok
        if(submitReservationResponse.status === 422){
            throw new Error("Server sent: Attributs manquants")
        }
        if(!submitReservationResponse.ok) {
            throw new Error("Erreur imprevue survenue")
        }

        // parse the response into json format
        const reservationIdJson = await submitReservationResponse.json()

        // assign the reservation id to each participant before sending the participants to the back end 
        // const participantsCopy = [... participants]
        const submittedParticipants : any[]  = []
        participants.forEach(participant => {
            submittedParticipants.push({
                nom : participant.nom,
                prenom : participant.prenom,
                naissance : participant.naissance,
                reservationId : reservationIdJson
            })
        })

        // submit Participants
        const participantsRequestOptions = {
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify(submittedParticipants)
        }

        const submitParticipantsResponse = await fetch(`http://localhost:3000/participants`, participantsRequestOptions)

        if(submitParticipantsResponse.status === 422){
            throw new Error("Server sent: Attributs manquants")
        }

        if(!submitParticipantsResponse.ok) {
            throw new Error("Erreur imprevue survenue")
        }

        isAddSuccessful = true;
    }

    // { A refactoriser ! ============
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

    // ============= }

    return(
        <>
            <h1>{ <span style={{color: "rgb(124, 31, 124)"}}>{salle_nom}</span>}  Escape Room</h1>
            <div className="card-details-container">
                <Card sx={{ width: 1000, maxWidth: 1200, maxHeight: 10000, mb: 5 }}>
                    <CardMedia component="img" height="500" image= {decodedImg} alt="escape room img" />
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
                            <div className="participants-input-container" key={participant._id}>
                                <TextField sx={{mb:1}} required label={`Nom`} variant="outlined" value={participant.nom} onChange={(event) => updateParticipantNom(participant._id, event)}/>
                                <TextField sx={{mb:1}} required label={`Prenom`} variant="outlined" value={participant.prenom}onChange={(event) => updateParticipantPrenom(participant._id, event)}/>
                                <TextField sx={{mb:1}} required label={`Date de naissance`} type="date" InputLabelProps={{ shrink: true }} variant="outlined" value={participant.naissance}onChange={(event) => updateParticipantNaissance(participant._id, event)}/>
                            </div>
                            ))}
                        </>
                        )}
                    </CardContent>
                    {/* {!isOfLegalAge && (
                         <Alert severity="error">
                             Au moin un des participans doit être majeur !
                        </Alert>
                    )} */}
                    <CardActions sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        {!isMissingRequiredFields() && <Button component={Link} to="#" size="small" color="primary" onClick={(event) => {submitReservation(event); true? navigate("/history") : navigate("/errorPage")} }>
                        Resérver
                        </Button>}
                    </CardActions>
                </Card>
            </div>  
        </>
    )
}
export default ReservationPageController