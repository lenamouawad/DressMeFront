import { Component, OnInit } from '@angular/core';
import { ArticleDTO } from 'src/app/models/articleDTO';
import { Bas } from 'src/app/models/bas';
import { Haut } from 'src/app/models/haut';
import { Tenue } from 'src/app/models/tenue';
import { ArticleService } from 'src/app/services/article.service';
import { BasService } from 'src/app/services/bas.service';
import { HautService } from 'src/app/services/haut.service';
import { TenueService } from 'src/app/services/tenue.service';

@Component({
  selector: 'app-tenue-proposee',
  templateUrl: './tenue-proposee.component.html',
  styleUrls: ['./tenue-proposee.component.css']
})
export class TenueProposeeComponent implements OnInit {

  tenue : Tenue;
  
  constructor(private tenueService : TenueService) { }

  ngOnInit(): void {
    this.initTenue();

  }

  initTenue(){
    this.tenueService.ProposerTenue("chaud", "habille").subscribe(data => {this.tenue = data;});
  }
/* Attention le sweat bleu est toujorus proposé pour frais decontracté. voir pourquoi */
}
