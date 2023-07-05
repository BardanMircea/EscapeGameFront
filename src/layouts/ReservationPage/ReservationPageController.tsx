import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SalleModel from "../../models/SalleModel"
import ParticipantModel from "../../models/ParticipantModel"

const ReservationPageController = () => {
    // get the salle_id passed as a parameter from the details page when clicking on a time window(creneau horaire)
    const {salle_id, salle_nom, salle_capacite, salle_img, jour, creneau} = useParams()
    const parts = salle_capacite?.split("-")
    
    const minNumberPart : number = parts? parseInt(parts[0]) : 0
    const maxNumberPart : number = parts? parseInt(parts[1]) : 0

    const values : number[] = populateValues(minNumberPart, maxNumberPart)

    const [selectedValue, setSelectedValue] = useState< | "" | "value" | undefined>()
    const [showInputs, setShowInputs] = useState(false);
    const [participants, setParticipants] = useState<ParticipantModel[]>([])

    function setNumberOfParticipants(event : any): void {
        const value = event.target.value as "" | "value" | undefined;
        setSelectedValue(value);
        setShowInputs(value !== "")
    }

    function submitReservation(event: any): void {
        // event.preventDefault()
    }

    // useEffect(() => {
    //     set
    // })

    return(
        <>
      <h1>{`${salle_nom} Escape Room`}</h1>
      <div className="card-details-container">
        <Card sx={{ width: 1000, maxWidth: 1200, maxHeight: 10000, mb: 5 }}>
         
            <CardMedia component="img" height="500" image={salle_img || "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"} alt="escape room img" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {salle_nom}
                </Typography>
                <p style={{ fontSize: 20 }}>
                Vous allez reserver la salle <span style={{ color: "green" }}> <i>{salle_nom}</i></span>, pour <span style={{ color: "green" }}> <i>{jour} {creneau}</i></span>
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
                    value={selectedValue}
                    label="Nombre de participants"
                    onChange={setNumberOfParticipants}
                >
                    {values.map((value) => (
                    <MenuItem value={value} key={value}>
                        {value}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
                {showInputs && (
                <>
                    {[...Array(selectedValue)].map( value => (
                    <div className="input-container" key={value}>
                        <TextField label={`Nom`} variant="outlined" />
                        <TextField label={`Prenom`} variant="outlined" />
                        <TextField label={`Date de naissance`} variant="outlined" />
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
        // <>
        //     <h1>{`${salle_nom} Escape Room`}</h1>
        //     <div className="card-details-container">
        //         <Card sx={{width: 1000, maxWidth: 1200, maxHeight: 1000, mb:5}} >
        //             <CardActionArea>
        //                 <CardMedia
        //                 component="img"
        //                 height="500"
        //                 image={ salle_img ? salle_img : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"}
        //                 alt="escape room img"
        //                 />
        //                 <CardContent>
        //                     <Typography gutterBottom variant="h5" component="div">
        //                         {salle_nom}
        //                     </Typography>
        //                        <p style={{fontSize:20}}> 
        //                         Vous allez reserver la salle 
        //                             <span style={{color:"green"}}> <i>{salle_nom}</i></span>
        //                         , pour 
        //                             <span style={{color:"green"}}> <i>{jour} {creneau}</i></span> 
        //                       </p>
        //                       <br />
        //                       <p style={{fontSize:20}}>
        //                         Le nombre de participants doit entre compris entre <span style={{color:"green"}}> <i>{salle_capacite}</i></span>
        //                       </p>          
        //                     <FormControl sx={{ m: 1, width: "100%" }} size="small">
        //                         <InputLabel id="demo-select-small-label">Nombre de participants</InputLabel>
        //                         <Select
        //                             labelId="demo-select-small-label"
        //                             id="demo-select-small"
        //                             value={selectedValue}
        //                             label="Nombre de participants"
        //                             onChange={setNumberOfParticipants}
        //                         >
        //                             {values.map(value => 
        //                                 <>
        //                                     <MenuItem value={value} key={value}>{value}</MenuItem>
                                    
        //                                 </>
        //                             )}
                                   
        //                         </Select>
        //                     </FormControl>  
        //                     {showInputs && (
        //                         <>
        //                         { values.map( value => (
        //                             <div className="input-container">
        //                                 <TextField key={value} label={`Nom`} variant="outlined" />
        //                                 <TextField key={value} label={`Prenom`} variant="outlined" />
        //                                 <TextField key={value} label={`Date de naissance`} variant="outlined" />
                                
        //                             </div>
        //                         ))}
        //                         </>
        //                 )}                  
        //                 </CardContent>
                       

        //             </CardActionArea>
        //             <CardActions sx={{display:"flex", justifyContent:"center", mt:2}}>
        //                 <Button component={Link} to="#" size="small" color="primary" onClick={submitReservation}  >
        //                     Resérver
        //                 </Button>
        //             </CardActions>
        //         </Card>
        //     </div>
        // </>
    )
}
export default ReservationPageController

function populateValues(min : number, max: number): number[] {
    const result = []
    for(let i=min; i<= max; i++){
        result.push(i)
    }
    return result
}   
