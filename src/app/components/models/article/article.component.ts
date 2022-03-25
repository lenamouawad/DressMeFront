import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDTO } from 'src/app/models/articleDTO';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article : ArticleDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
