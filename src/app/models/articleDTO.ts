export class ArticleDTO{
    idInCategory : string;
    categorie: string;
    imgUrl: string;

    constructor(idInCategory: string, categorie: string, imgUrl: string, ){
        this.idInCategory = idInCategory;
        this.categorie = categorie;
        this.imgUrl = imgUrl;
    }
}