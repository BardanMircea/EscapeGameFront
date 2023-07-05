class UtilisateurModel {
    _id : number
    nom : string
    prenom : string
    email : string
    mdp : string
    naissance : string

    constructor(id : number, nom : string, prenom : string, email : string, mdp : string, naissance : string){
        this._id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.mdp = mdp
        this.naissance = naissance
    }
}

export default UtilisateurModel