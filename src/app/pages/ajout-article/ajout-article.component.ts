import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategorieBas } from 'src/app/enums/categoriesBas';
import { CategorieHaut } from 'src/app/enums/categoriesHaut';
import { Bas } from 'src/app/models/bas';
import { Chaussure } from 'src/app/models/chaussure';
import { Haut } from 'src/app/models/haut';
import { BasService } from 'src/app/services/bas.service';
import { HautService } from 'src/app/services/haut.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  categorie : number = 0 ;
  sousCategorie: number = 0;
  type : number = 0;
  matiere : number =0;
  manches : number =0;
  couleur : number[];
  url : string = "./assets/images/emptyPhoto.png";

  haut : Haut;
  bas : Bas;
  chaussure : Chaussure;

  constructor(private hautService : HautService, private basService : BasService,) { }

  ngOnInit(): void {
    this.initCategorie;
    this.initSousCategorie;
  }

  initCategorie(){
    this.categorie = 0;
  }

  initSousCategorie(){
    this.sousCategorie = 0;
  }

  getCategorie(categ : number){
    if (this.categorie != categ){
    this.categorie = categ;}
    else{
      this.categorie = 0;
    }
    this.sousCategorie = 0;
    this.type = 0;
  }
  getSousCategorie(souscat : number){
    if (this.sousCategorie != souscat){
      this.sousCategorie = souscat;}
      else{
        this.sousCategorie = 0;
      }
      this.type = 0;
  }

  getType(typeTenue : number){
    if (this.type != typeTenue){
    this.type = typeTenue;}
    else{
      this.type = 0;
    }
  }

  getMatiere(matiereTenue : number){
    if (this.matiere != matiereTenue){
      this.matiere = matiereTenue;}
      else{
        this.matiere = 0;
      }
  }

  getManches(manche : number){
    if (this.manches != manche){
      this.manches = manche;}
      else{
        this.manches = 0;
      }
  }

onselectFile(e){
if (e.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{this.url = event.target.result;}
}}

addItem(){
  if ((this.categorie == 1) ||(this.categorie == 2)){
   /*this.haut.categorie = CategorieHaut.valueof(this.sousCategorie-1);*/
  /* this.haut.type = <Types>this.type;
   this.haut.motif =<Motifs>0;
   this.haut.couleur = this.couleur;
   this.haut.matiere = this.matiere;
   this.haut.manche = this.manches;*/
   this.haut.imgUrl = this.url;
   this.hautService.create(this.haut).subscribe(data => {this.haut = data;});
  }
  else if (this.categorie == 3)
  {
    /*this.bas.categorie =<CategorieBas>( this.sousCategorie-1);*/
    /*this.bas.type = <Types> this.type;
    this.bas.motif =<Motifs>0;
    this.bas.couleur = this.couleur;
    this.bas.matiere = this.matiere;*/
    this.bas.imgUrl = this.url;
    this.basService.create(this.bas).subscribe(data => {this.bas = data;});
   }
}
}
