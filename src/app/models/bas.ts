import { CategorieBas } from "../enums/categoriesBas";
import { Couleur } from "../enums/couleur";
import { Matiere } from "../enums/matiere";
import { Motifs } from "../enums/motifs";
import { Types } from "../enums/types";

export class Bas {
    id: string;
    couleur: Couleur[];
    matiere: Matiere;
    motif: Motifs;
    imgUrl: string;
    type: Types;
    categorie: CategorieBas;
    estFavoris: boolean;

    constructor(id: string, couleur: Couleur[], matiere: Matiere, motif: Motifs, imgUrl: string, type: Types, categorie: CategorieBas, estFavoris: boolean){
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