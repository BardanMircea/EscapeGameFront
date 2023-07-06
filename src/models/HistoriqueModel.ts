class HistoriqueModel {
  participants: any[];
  reservation: object;
  salle: object;

  constructor(participants: any[], reservation: object, salle: object) {
    this.participants = participants;
    this.reservation = reservation;
    this.salle = salle;
  }
}

export default HistoriqueModel;
