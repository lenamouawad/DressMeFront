enum Manches
    {
        courtes,
        longues,
        pasDeManches,
        bretelles
    }

    enum CategorieHaut
    {
        robe,
        pull,
        sweat,
        tshirt,
        top,
        chemise,
        blouse,
        gilet,
        veste,
        blazer,
        manteau,
        doudoune,
        trench
    }

    enum Types
    {
        sport,
        decontracte,
        habille,
        soiree
    }

    enum Motifs
    {
        pasDeMotifs,
        fleuri,
        rayures,
        imprime,
        carreaux,
        paillettes,
        marbre,
        geometrique,
        strass,
        perles,
        chevrons,
        texte
    }

    enum Matiere
    {
        denim,
        maille,
        coton,
        lin,
        fourrure,
        laine,
        satin,
        soie,
        cuir,
        cachemire,
        velours,
        dentelle,
        autre
    }

    enum Couleur
    {
        jaune,
        rouge,
        bleu,
        orange,
        magenta,
        marron,
        gris,
        beige,
        kaki,
        violet,
        rose,
        turquoise,
        vert,
        blanc,
        noir,
        bordeaux,
        denim
    }

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