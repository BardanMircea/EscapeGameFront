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
  const [salles, setSalles] = useState<SallesProps[]>();
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
              {salles?.map((salle) => (
                <TableRow key={salle.nom}>
                  <TableCell>{salle.nom}</TableCell>
                  <TableCell>{salle.status ? "Actif" : "Inactif"}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary">
                      Update
                    </Button>
                    <Button variant="contained" color="error">
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
