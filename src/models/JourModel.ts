class JourModel {
    nom : string
    disponibleMatin : boolean
    disponibleAprem : boolean

    constructor(nom :string){
        this.nom = nom
        this.disponibleMatin = true
        this.disponibleAprem = true
    }

    setDisponibleMatin(valeur : boolean) : void {
        this.disponibleMatin = valeur
    }
    setDisponibleAprem(valeur : boolean) : void {
        this.disponibleAprem = valeur
    }
}

export default JourModel