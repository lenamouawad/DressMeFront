import { Bas } from "./bas";
import { Haut } from "./haut";
import { Chaussure } from "./chaussure";

export class Tenue {
    id: string;
    haut: Haut;
    bas: Bas;
    chaussure: Chaussure;


    constructor(id: string, haut: Haut, bas: Bas, chaussure: Chaussure){
        this.id = id;
        this.haut = haut;
        this.bas = bas;
        this.chaussure = chaussure;
    }
}