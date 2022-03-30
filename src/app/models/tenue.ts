import { Bas } from "./bas";
import { Haut } from "./haut";
import { Chaussure } from "./chaussure";
import { ViewportScroller } from "@angular/common";

export class Tenue {
    id: string;
    haut: Haut;
    hautId : string;
    basId:string;
    vesteId:string;
    chaussureId:string;

    veste : Haut;
    bas: Bas;
    chaussure: Chaussure;


    constructor(id: string, haut: Haut, veste : Haut, bas: Bas, chaussure: Chaussure, vesteId : string, hautId : string, basId : string, chaussureId : string){
        this.id = id;
        this.haut = haut;
        this.veste = veste;
        this.bas = bas;
        this.chaussure = chaussure;
        this.hautId = hautId;
        this.vesteId = vesteId;
        this.basId = basId;
        this.chaussureId = chaussureId;
    }
}