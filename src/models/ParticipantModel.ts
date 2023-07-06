class ParticipantModel {
    id : number
    nom : string
    prenom : string
    naissance : string
    reservationId : string

    constructor(id: number, nom : string, prenom : string, naissance : string, reservationId : string){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.naissance = naissance
        this.reservationId = reservationId
    }
}

export default ParticipantModel