import { Component, OnInit } from '@angular/core';
import{Haut} from 'src/app/models/haut';
import{Bas} from 'src/app/models/bas';
import { HautService } from 'src/app/services/haut.service';
import { BasService } from 'src/app/services/bas.service';

@Component({
  selector: 'app-articles-favoris',
  templateUrl: './articles-favoris.component.html',
  styleUrls: ['./articles-favoris.component.css']
})
export class ArticlesFavorisComponent implements OnInit {

  hauts:Haut[];
  bas:Bas [];

  constructor(private hautService : HautService, private basService : BasService) { }

  ngOnInit(): void {
    this.initHauts();
    this.initBas();
  }

  initHauts(){
    this.hautService.findAllFavoris().subscribe(data => {this.hauts = data.slice(0,8);});
  }
  initBas(){
    this.basService.findAllFavoris().subscribe(data => {this.bas = data.slice(0,8);});
  }

}
