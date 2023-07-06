
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import SalleModel from "../../models/SalleModel";


interface HomePageViewProps {
  salles: SalleModel[];
}

const HomePageView = (props: HomePageViewProps) => {
  const { salles } = props;

  return (
    <>
      <h1>Nos escape rooms</h1>
      {/* <h2>Nos Escape Rooms vous attendent</h2> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          paddingLeft: 15,
          paddingRight: 15,
          "@media (max-width: 600px)": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
      >
        {salles.map((salle) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={salle._id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 400, maxWidth: "100%" }}>
              
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    salle.img
                      ? salle.img
                      : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"
                  }
                  alt="escape room img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {salle.nom}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      height: 35,
                    }}
                  >
                    {salle.description}
                  </Typography>
                </CardContent>
             
              <CardActions>
                <Button
                  component={Link}
                  to={`/details/${salle._id}`}
                  size="small"
                  color="primary"
                >
                  Résever
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePageView;
