import { useEffect, useState } from "react";
import HistoriqueModel from "../../models/HistoriqueModel";
import HistoriqueView from "./HistoriquePageView";

const HistoriquePageController = () => {
  //Hook pour l'utilisateur
  const [resultat, setResultat] = useState<HistoriqueModel[]>([]);
  //Hook pour le loading (attendre la réponse du fetch avant d'afficher la page)
  const [loading, setLoading] = useState(false);

  // Récupérer la valeur de l'utilisateur dans le local storage
  let id = "";
  const data = localStorage.getItem("user");
  if (data) {
    const parsedData = JSON.parse(data);
    id = parsedData._id;
  } else {
    console.log("Aucune valeur trouvée dans le localStorage");
  }

  //url avec l'id de l'utilisateur
  let url = "http://localhost:3000/reservations/participants/" + id;

  //fonction pour récupérer la réservation, les participants et la salle
  async function fetchData() {
    try {
      const responseReserv = await fetch(url);
      const dataReserv = await responseReserv.json();
      setResultat(dataReserv);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <HistoriqueView resultat={resultat} loading={loading} />;
};

export default HistoriquePageController;
