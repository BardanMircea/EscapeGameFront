class SalleModel {

    _id : number
    nom : string
    description : string
    capacite : string
    img? : string
    status : boolean

    constructor(id : number, nom : string, description : string, capacite : string,  status : boolean, img? : string) {
        this._id = id
        this.nom = nom
        this.description = description
        this.capacite = capacite
        this.status = status
        if(img) this.img = img
        
    }
}

export default SalleModel;
