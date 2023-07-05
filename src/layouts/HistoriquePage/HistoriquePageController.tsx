import { useEffect, useState } from "react";
import HistoriqueModel from "../../models/HistoriqueModel";
import HistoriqueView from "./HistoriquePageView";

const HistoriqueController = () => {
  const [resultat, setResultat] = useState<HistoriqueModel[]>([]);
  let idReserv = "649ae774519f697934d8a0a0";
  let idNoResrv = "649ea013ca883d880d30d30d";
  let url = "http://localhost:3000/reservations/participants/" + idNoResrv;
  let dataReserv = [];

  async function fetchData() {
    try {
      const responseReserv = await fetch(
        url
        // "http://localhost:3000/reservations/participants/${idReserv}"
      );
      const dataReserv = await responseReserv.json();
      setResultat(dataReserv);
      //console.log("AUTRE REPONSE", [dataReserv]);
      console.log("LES PARTICIPANTS DES RESERVATIONS SONT", dataReserv);
    } catch (error) {
      // Gérez les erreurs de requête ici
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  // return <HistoriqueView resultat={resultat} />;
  return (
    <div>
      {dataReserv.length !== 0 ? (
        <HistoriqueView resultat={resultat} />
      ) : (
        <p>Vous n'avez pas encore de réservation </p>
      )}
    </div>
  );
};

export default HistoriqueController;

//modification du CSS
//modification de Vieuw, vérifier avant de pusher

//fuser -k 3000/tcp [tuer le port 3000]
