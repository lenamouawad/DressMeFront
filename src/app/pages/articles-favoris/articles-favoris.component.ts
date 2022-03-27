import { Component, OnInit } from '@angular/core';
import{Haut} from 'src/app/models/haut';
import{Bas} from 'src/app/models/bas';
import { HautService } from 'src/app/services/haut.service';
import { BasService } from 'src/app/services/bas.service';
import { ArticleDTO } from 'src/app/models/articleDTO';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-favoris',
  templateUrl: './articles-favoris.component.html',
  styleUrls: ['./articles-favoris.component.css']
})
export class ArticlesFavorisComponent implements OnInit {

  hauts:Haut[];
  bas:Bas [];
  article : ArticleDTO[];

  hautsToShow:Haut[];
  basToShow:Bas[];
  articlesToShow : ArticleDTO[];

  whatToShow : number;

  next : number;

  emptyCards : number[];
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
    this.hautService.findAllFavoris().subscribe(data => {this.hautsToShow = data.slice(0,8);});
    this.basService.findAllFavoris().subscribe(data => {this.basToShow = data.slice(0,8);});
    this.articleService.findAllFavoris().subscribe(data =>{this.articlesToShow = data.slice(0,8);})
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
    this.articleService.findAllFavoris().subscribe(data => {this.article = data;});
  }
  initHauts(){
    this.hautService.findAllFavoris().subscribe(data => {this.hauts = data;});
  }
  initBas(){
    this.basService.findAllFavoris().subscribe(data => {this.bas = data;});
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
    if (((this.whatToShow == 0) &&  this.next >0)
    || ((this.whatToShow == 1) && this.next >0)
    || ((this.whatToShow == 2) && this.next >0)
     ) {
    this.next -= 9;
    this.changeImageShow(this.next);
  }}

  changeImageShow(nbr : number){
   this.hautsToShow = this.hauts.slice(nbr,nbr+8);
   this.articlesToShow = this.article.slice(nbr ,nbr +8);
   this.basToShow = this.bas.slice(nbr,nbr+8);
  }
  

}
