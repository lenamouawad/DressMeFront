import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


enum CategorieHaut
{
    robe,
    pull,
    sweat,
    tshirt,
    top,
    chemise,
    blouse,
    gilet,
    veste,
    blazer,
    manteau,
    doudoune,
    trench
}

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.css']
})


export class HautComponent implements OnInit {
  @Input() haut : Haut;

  constructor(  ) { }

  ngOnInit(): void {
    }


  
}
