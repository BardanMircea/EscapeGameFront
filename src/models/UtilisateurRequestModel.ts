class UtilisateurRequestModel {  
    nom : string
    prenom : string
    email : string
    mdp : string
    naissance : string

    constructor(nom : string, prenom : string, email : string, mdp : string, naissance : string){
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.mdp = mdp
        this.naissance = naissance
    }
}

export default UtilisateurRequestModel