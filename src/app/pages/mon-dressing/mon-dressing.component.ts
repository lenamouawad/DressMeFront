import { Component, OnInit } from '@angular/core';
import{Haut} from 'src/app/models/haut';
import{Bas} from 'src/app/models/bas';
import { HautService } from 'src/app/services/haut.service';
import { BasService } from 'src/app/services/bas.service';

@Component({
  selector: 'app-mon-dressing',
  templateUrl: './mon-dressing.component.html',
  styleUrls: ['./mon-dressing.component.css']
})
export class MonDressingComponent implements OnInit {

  hauts:Haut[];
  bas:Bas [];
  haut:Haut;
/*nbrArticles:number;
nbrHauts:number;
nbrBas:number;*/

  constructor(private hautService : HautService, private basService : BasService) { }

  ngOnInit(): void {
    this.initHauts();
    this.initBas();
    this.initHauts();
    /*this.initNbrArticles();*/
    this.initHaut();
  }

  initHauts(){
    this.hautService.findAll().subscribe(data => {this.hauts = data;});
    console.log("hello");

    /*this.nbrHauts = this.hauts.length;
    console.log("hello");*/
  }
  initBas(){
    this.basService.findAll().subscribe(data => {this.bas = data;});

    /*this.nbrBas = this.bas.length;*/
  }

  /*initNbrArticles(){
    this.nbrArticles = this.nbrHauts + this.nbrBas;
  }*/
  initHaut(){

    this.hautService.findById("61e93fcd7c4af3322df3d16d").subscribe(data => {this.haut = data;})
    console.log("hello", this.haut.aCapuche);

  }
}
