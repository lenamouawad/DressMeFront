export class Haut {
    id: string;
    couleur: string[];
    matiere: string;
    motif: string;
    imgUrl: string;
    type: string;
    categorie: string;
    manche: string;
    estImpermeable: boolean;
    aCapuche: boolean;
    estFavoris: boolean;

    constructor(id: string, couleur: string[], matiere: string, motif: string, imgUrl: string, type: string, categorie: string, manche: string, estImpermeable: boolean, aCapuche: boolean, estFavoris: boolean){
        this.id = id;
        this.couleur = couleur;
        this.matiere = matiere;
        this.motif = motif;
        this.imgUrl = imgUrl;
        this.type = type;
        this.categorie = categorie;
        this.manche = manche;
        this.estImpermeable = estImpermeable;
        this.aCapuche = aCapuche;
        this.estFavoris = estFavoris;
    }
}