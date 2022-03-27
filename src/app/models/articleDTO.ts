export class ArticleDTO{
    idInCategory : string;
    categorie: string;
    imgUrl: string;
    estFavoris: boolean;

    constructor(idInCategory: string, categorie: string, imgUrl: string, estFavoris: boolean ){
        this.idInCategory = idInCategory;
        this.categorie = categorie;
        this.imgUrl = imgUrl;
        this.estFavoris = estFavoris;
    }
}