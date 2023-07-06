interface ReservationModel {
  _id: string;
  salleId: string;
  jour: string;
  creneau: string;
  utilisateurId: string;
}

interface SalleModel {
  _id: string;
  nom: string;
  description: string;
  img: string;
  capacite: string;
}

interface HistoriqueModel {
  participants: any[];
  reservation: ReservationModel;
  salle: SalleModel;
}

export default HistoriqueModel;
// export default ReservationModel;
