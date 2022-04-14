import { Component, Input, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {
  @Input() chaussure : Chaussure;
  id : string;

  constructor(private chaussureService : ChaussureService) { }

  ngOnInit(): void {
    this.id = this.chaussure.id;
  }

  changeFavorites(){
    this.chaussureService.estFavoris(this.id, this.chaussure).subscribe();
    this.chaussure.estFavoris = !this.chaussure.estFavoris;
  }

}
