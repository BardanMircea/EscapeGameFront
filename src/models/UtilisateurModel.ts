class UtilisateurModel {
    id : number
    nom : string
    prenom : string
    email : string
    mdp : string
    naissance : string

    constructor(id : number, nom : string, prenom : string, email : string, mdp : string, naissance : string){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.mdp = mdp
        this.naissance = naissance
    }
}

export default UtilisateurModel