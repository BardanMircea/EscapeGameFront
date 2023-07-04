import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material"
import {Link, useParams} from "react-router-dom"
import SalleModel from "../../models/SalleModel"
import { useEffect, useState } from "react"

const SalleDetailsPageController = () => {
    
    const [salle,  setSalle] = useState<SalleModel>()

    const {salle_id} = useParams()

    const fetchSalle = async(id : string | undefined) => {
        const response = await fetch(`http://localhost:3000/salles/${id}`)
        const responseJson = await response.json() 
        const salle = new SalleModel(responseJson._id, responseJson.nom, responseJson.description, responseJson.capacite, responseJson.img)
        setSalle(salle)
    }   

    useEffect(() => {
        fetchSalle(salle_id)
    }, [salle_id])
    

    return(
        <div className="card-details-container">
            <Card sx={{width: 1000, maxWidth: 1200, maxHeight: 1000, mt:5}} >
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
                            sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", height:35}}
                        >
                            {salle?.description}    
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to="salle/reservation" size="small" color="primary" >
                        Resérver
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default SalleDetailsPageController

