import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
} from "@mui/material";

interface SallesProps {
  nom: string;
  status: boolean;
}

const AdminPageController = () => {
  const [salles, setSalles] = useState<SallesProps[] | undefined>();
  //fonction pour récupérer la réservation, les participants et la salle

  async function fetchData() {
    try {
      const responseSalles = await fetch("http://localhost:3000/salles");

      const dataSalles = await responseSalles.json();
      //  console.log(dataSalles);

      const extractedSalles = dataSalles.map((salle: SallesProps) => ({
        nom: salle.nom,
        status: salle.status,
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
    const updatedSalles = [...salles];
    const salle = updatedSalles[index];
    salle.status = !salle.status; // Toggle the status

    try {
      // Send a request to update the status in the database
      await fetch(`http://localhost:3000/salles/${salle.id}`, {
        method: "PUT",
        body: JSON.stringify({ status: salle.status }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSalles(updatedSalles);
    } catch (error) {
      console.error(error);
    }
  };

  ///Supprimer une salle de la base de données
  const handleDeleteSalle = async (index: number) => {
    const updatedSalles = [...salles];
    const salle = updatedSalles[index];

    try {
      // Envoyer une requête pour supprimer la salle de la base de données
      await fetch(`http://localhost:3000/salles/${salle.id}`, {
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
    <div>
      <Container component="main" maxWidth="md">
        <h1>Admin Page</h1>
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Nom</b>
                </TableCell>
                <TableCell>
                  <b>Status</b>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salles?.map((salle, index) => (
                <TableRow key={salle.nom}>
                  <TableCell>{salle.nom}</TableCell>
                  <TableCell>
                    {salle.status ? "Disponible" : "Indisponible"}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdateStatus(index)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteSalle(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AdminPageController;
