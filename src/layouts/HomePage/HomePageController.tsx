import { useEffect, useState } from "react";
import SalleModel from "../../models/SalleModel";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

const HomePageController = () => {

    const [salles, setSalles] = useState<SalleModel[]>([])

    // async method to call our backend API (the salle_controller's get method) 
    const getSalles = async () => {
        const url = `http://localhost:3000/salles`;
        const sallesArrayResponse = await fetch(url)

        if(!sallesArrayResponse.ok){
            throw new Error("Something went wrong")
        }

        // if the response's status is 200, transform it into json format and set the state of our salles to it's value 
        const sallesJson = await sallesArrayResponse.json()
        setSalles(sallesJson)
        console.log(sallesJson)
    }

    // useEffect to call the getSalles method at every rerender
    useEffect(() => {
        getSalles()
    }, [])

    return(
        <>
            <h1>Escape Game Page d'Accueil</h1>
            <h2>Nos Escape Rooms vous attendent</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}} >
                {salles.map((salle) => (
                    <Grid item xs={2} sm={4} md={4} key={salle._id} sx={{ display: 'flex', justifyContent: 'center'}}>
                         <Card sx={{ maxWidth: 345, width: 345}} >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={salle.img ? salle.img : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"}
                                alt="escape room img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {salle.nom}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", height:35}}
                                    >
                                        {salle.description}    
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Détails
                                </Button>
                                <Button size="small" color="primary">
                                    Resérver
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default HomePageController;