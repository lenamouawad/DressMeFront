import { Haut } from 'src/app/models/haut';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
