import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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
}
