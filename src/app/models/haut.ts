import { CategorieHaut } from "../enums/categoriesHaut";
import { Couleur } from "../enums/couleur";
import { Manches } from "../enums/manches";
import { Matiere } from "../enums/matiere";
import { Motifs } from "../enums/motifs";
import { Types } from "../enums/types";

export class Haut {
    id: string;
    couleur: Couleur[];
    matiere: Matiere;
    motif: Motifs;
    imgUrl: string;
    type: Types;
    categorie: CategorieHaut;
    manche: Manches;
    estImpermeable: boolean;
    aCapuche: boolean;
    estFavoris: boolean;

    constructor(id: string, couleur: Couleur[], matiere: Matiere, motif: Motifs, imgUrl: string, type: Types, categorie: CategorieHaut, manche: Manches, estImpermeable: boolean, aCapuche: boolean, estFavoris: boolean){
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