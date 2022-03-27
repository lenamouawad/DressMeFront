import { Component, OnInit } from '@angular/core';
import{Haut} from 'src/app/models/haut';
import{Bas} from 'src/app/models/bas';
import { HautService } from 'src/app/services/haut.service';
import { BasService } from 'src/app/services/bas.service';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleDTO } from 'src/app/models/articleDTO';

@Component({
  selector: 'app-mon-dressing',
  templateUrl: './mon-dressing.component.html',
  styleUrls: ['./mon-dressing.component.css']
})
export class MonDressingComponent implements OnInit {

  hauts:Haut[];
  bas:Bas [];
  article : ArticleDTO[];

  hautsToShow:Haut[];
  basToShow:Bas[];
  articlesToShow : ArticleDTO[];

  whatToShow : number;

  next : number;

  constructor(private hautService : HautService, private basService : BasService, private articleService : ArticleService) { }

  ngOnInit(): void {
    this.initArticles();
    this.initHauts();
    this.initBas();
    this.initNext();

    this.initWhatToShow();
    this.initImagesToShow();

  }

  initWhatToShow(){this.whatToShow=0;}

  initImagesToShow(){    
    this.hautService.findAll().subscribe(data => {this.hautsToShow = data.slice(0,8);});
    this.basService.findAll().subscribe(data => {this.basToShow = data.slice(0,8);});
    this.articleService.findAll().subscribe(data =>{this.articlesToShow = data.slice(0,8);})
}

  showImages(categorie : number) {
    var nbr = 0;
    this.next = 0;
    this.changeImageShow(0);

    if (categorie==0)
    {
      nbr = 0;
    }
    else if (categorie==1)
    {
      nbr =  1;
    }
    else if (categorie==2)
    {
      nbr =2;
    }
    else if (categorie==3)
    {
      nbr =  3;
    }
    else if (categorie==4)
    {
      nbr =4;
    }
    this.whatToShow = nbr;
  }

  initArticles(){
    this.articleService.findAll().subscribe(data => {this.article = data;});
  }
  initHauts(){
    this.hautService.findAll().subscribe(data => {this.hauts = data;});
  }
  initBas(){
    this.basService.findAll().subscribe(data => {this.bas = data;});
  }
  initNext(){
    this.next = 0;
  }
   showArrows() : boolean{
      return true;
  }

  clickArrowRight(){
    if (((this.whatToShow == 0) && (this.article.length - (this.next+8) > 0))
    || ((this.whatToShow == 1) && (this.hauts.length - (this.next+8) > 0))
    || ((this.whatToShow == 2) && (this.bas.length - (this.next+8) > 0)) ){
      this.next += 9;
      this.changeImageShow(this.next);}
    
  }

  clickArrowLeft(){
    if (((this.whatToShow == 0) && (this.article.length - this.next < this.article.length))
    || ((this.whatToShow == 1) && (this.hauts.length - this.next < this.hauts.length))
    || ((this.whatToShow == 2) && (this.bas.length - this.next < this.bas.length))
     ) {
    this.next -= 9;
    this.changeImageShow(this.next);
  }}

  changeImageShow(nbr : number){
    this.hautService.findAll().subscribe(data => {this.hautsToShow = data.slice(nbr ,nbr +8);});
    this.basService.findAll().subscribe(data => {this.basToShow = data.slice(nbr ,nbr +8);});
   this.articlesToShow = this.article.slice(nbr ,nbr +8);
  }
  



}
