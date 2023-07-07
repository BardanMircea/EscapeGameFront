import { useState, useEffect } from "react";
import AdminPageView from "./AdminPageView";

export interface Salles {
  nom: string;
  status: boolean;
  _id: string;
}

const AdminPageController = () => {
  const [salles, setSalles] = useState<Salles[]>([]);
  //fonction pour récupérer la réservation, les participants et la salle

  async function fetchData() {
    try {
      const responseSalles = await fetch("http://localhost:3000/salles");

      const dataSalles = await responseSalles.json();

      const extractedSalles = dataSalles.map((salle: Salles) => ({
        nom: salle.nom,
        status: salle.status,
        _id: salle._id,
      }));
      setSalles(extractedSalles);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  //modifier le statut de la salle dans la base de données
  const handleUpdateStatus = async (index: number) => {
    let updatedSalles: Salles[] = [];
    updatedSalles = [...salles];
    const salle = updatedSalles[index];
    salle.status = !salle.status; // Toggle the status
    try {
      // Send a request to update the status in the database
      const url = await fetch(`http://localhost:3000/salles/${salle._id}`, {
        method: "PUT",
        body: JSON.stringify({ status: salle.status }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(url);
      setSalles(updatedSalles);
    } catch (error) {
      console.error(error);
    }
  };

  ///Supprimer une salle de la base de données
  const handleDeleteSalle = async (index: number) => {
    let updatedSalles: Salles[] = [];
    updatedSalles = [...salles];
    const salle = updatedSalles[index];

    try {
      // Envoyer une requête pour supprimer la salle de la base de données
      await fetch(`http://localhost:3000/salles/${salle._id}`, {
        method: "DELETE",
      });

      // Mettre à jour l'état des salles après la suppression
      updatedSalles.splice(index, 1);
      setSalles(updatedSalles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminPageView
      handleUpdateStatus={handleUpdateStatus}
      handleDeleteSalle={handleDeleteSalle}
      salles={salles}
    />
  );
};

export default AdminPageController;
