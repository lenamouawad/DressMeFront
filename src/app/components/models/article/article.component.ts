import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDTO } from 'src/app/models/articleDTO';
import { ArticleService } from 'src/app/services/article.service';
import { HautService } from 'src/app/services/haut.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article : ArticleDTO;

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
  }

  changeFavorites(){
    this.articleService.estFavoris(this.article.idInCategory, this.article).subscribe();
    this.article.estFavoris = !this.article.estFavoris;

    /*this.articleService.estFavoris(this.article.id);*/
  }

}
