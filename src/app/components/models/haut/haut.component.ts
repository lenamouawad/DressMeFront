import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HautService } from 'src/app/services/haut.service';

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.css']
})


export class HautComponent implements OnInit {
  @Input() haut : Haut;
  id : string;

  constructor(private hautService : HautService  ) { }

  ngOnInit(): void {
    this.id = this.haut.id;
  }

  changeFavorites(){
    this.hautService.estFavoris(this.id, this.haut).subscribe();
    this.haut.estFavoris = !this.haut.estFavoris;
  }
  
}
