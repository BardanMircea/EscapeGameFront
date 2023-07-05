import HistoriqueModel from "../../models/HistoriqueModel";
import { Grid, Card, CardMedia, Typography } from "@mui/material";

interface HistoriqueViewProps {
  resultat: HistoriqueModel[];
}

const HistoriqueView = (props: HistoriqueViewProps) => {
  const { resultat } = props;

  return (
    <div>
      <h1>Voici vos réservations :</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {resultat.map((item) => (
          <Grid item key={item.reservation._id}>
            <Card
              className="ReservCard"
              style={{ width: "250px", backgroundColor: "rgb(233, 231, 231)" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={
                  item.salle.img
                    ? item.salle.img
                    : "https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg"
                }
                alt="Image Alt Text"
              />
              <Typography
                variant="h6"
                component="div"
                style={{ marginLeft: "5px" }}
              >
                {item.salle.nom}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "10px" }}
              >
                <b>Jour :</b> {item.reservation.jour}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "10px" }}
              >
                <b>Créneau :</b> {item.reservation.creneau}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginLeft: "10px" }}
              >
                <b>Participants : </b>
              </Typography>
              <ul style={{ marginTop: 0 }}>
                {item.participants.map((participant) => (
                  <li key={participant._id}>
                    {participant.nom} {participant.prenom}
                  </li>
                ))}
              </ul>
            </Card>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default HistoriqueView;
