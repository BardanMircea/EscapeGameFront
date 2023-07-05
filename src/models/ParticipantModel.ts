class ParticipantModel {
    nom : string
    prenom : string
    naissance : string
    reservationId : string

    constructor(nom : string, prenom : string, naissance : string, reservationId : string){
        this.nom = nom
        this.prenom = prenom
        this.naissance = naissance
        this.reservationId = reservationId
    }
}

export default ParticipantModel