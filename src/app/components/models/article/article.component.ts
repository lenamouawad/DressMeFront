import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDTO } from 'src/app/models/articleDTO';
import { ArticleService } from 'src/app/services/article.service';

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
    this.article.estFavoris = !this.article.estFavoris;
    /*this.articleService.estFavoris(this.article.id);*/
  }

}
