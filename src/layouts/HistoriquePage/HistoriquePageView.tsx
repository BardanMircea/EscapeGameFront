import HistoriqueModel from "../../models/HistoriqueModel";
import { Grid, Card, CardMedia, Typography, colors } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import { useNavigate } from "react-router-dom";

//interface Historique
interface HistoriqueViewProps {
  resultat: HistoriqueModel[];
  loading: boolean;
}

const HistoriquePageView = (props: HistoriqueViewProps) => {
  const { resultat, loading } = props;
  const navigate = useNavigate();

  return (
    loading && (
      <div>
        {resultat.length !== 0 ? (
          <div>
            <h1>Voici vos réservations :</h1>
            <div
              className="card-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {resultat.map((item) => (
                <Grid item key={item.reservation._id}>
                  <Card
                    className="ReservCard"
                    style={{
                      width: "250px",
                      backgroundColor: "rgb(233, 231, 231)",
                      display:
                        "grid" /* Utilise une grille pour aligner les éléments internes */,
                      gridTemplateRows:
                        "auto auto auto 1fr" /* Répartit l'espace de la carte en 4 rangées */,
                      gap: "5px" /* Espace entre les éléments de la grille */,
                    }}
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
                      style={{ marginLeft: "10px", color: "black" }}
                    >
                      <b>Jour :</b> {item.reservation.jour}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ marginLeft: "10px", color: "black" }}
                    >
                      <b>Créneau :</b> {item.reservation.creneau}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ marginLeft: "10px", color: "black" }}
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
        ) : (
          <div>
            <h1>Vous n'avez pas encore de réservation ! </h1>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              N'attendez plus pour réserver et venez découvrir nos salles
              disponibles&nbsp;
              <a href="/" onClick={() => navigate("/")}>
                ici
              </a>
              &nbsp;
              <MoodIcon />
            </p>
          </div>
        )}
      </div>
    )
  );
};

export default HistoriquePageView;
