class SalleModel {
  _id: number;
  nom: string;
  description: string;
  capacite: string;
  img?: string;

  constructor(
    id: number,
    nom: string,
    description: string,
    capacite: string,
    img?: string
  ) {
    this._id = id;
    this.nom = nom;
    this.description = description;
    this.capacite = capacite;
    if (img) this.img = img;
  }
}

export default SalleModel;
