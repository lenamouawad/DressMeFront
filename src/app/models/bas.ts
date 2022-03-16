export class Bas {
    id: string;
    couleur: string[];
    matiere: string;
    motif: string;
    imgUrl: string;
    type: string;
    categorie: string;
    estFavoris: boolean;

    constructor(id: string, couleur: string[], matiere: string, motif: string, imgUrl: string, type: string, categorie: string, estFavoris: boolean){
        this.id = id;
        this.couleur = couleur;
        this.matiere = matiere;
        this.motif = motif;
        this.imgUrl = imgUrl;
        this.type = type;
        this.categorie = categorie;
        this.estFavoris = estFavoris;
    }
}