import { CategorieChaussure } from "../enums/categoriesChaussure";
import { Couleur } from "../enums/couleur";
import { Matiere } from "../enums/matiere";
import { Motifs } from "../enums/motifs";
import { Types } from "../enums/types";

export class Chaussure {
    id: string;
    couleur: Couleur[];
    matiere: Matiere;
    motif: Motifs;
    imgUrl: string;
    type: Types;
    categorie: CategorieChaussure;
    estFavoris: boolean;

    constructor(id: string, couleur: Couleur[], matiere: Matiere, motif: Motifs, imgUrl: string, type: Types, categorie: CategorieChaussure, estFavoris: boolean){
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