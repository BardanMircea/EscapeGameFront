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
import { Salles } from "./AdminPageController";
interface AdminPageViewProps {
  handleUpdateStatus: (index: number) => void;
  handleDeleteSalle: (index: number) => void;
  salles: Salles[];
}

const AdminPageView = (props: AdminPageViewProps) => {
  const { handleUpdateStatus, handleDeleteSalle, salles } = props;
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

export default AdminPageView;
