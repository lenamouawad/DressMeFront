import { Component, OnInit } from '@angular/core';
import { Haut } from 'src/app/models/haut';
import { HautService } from 'src/app/services/haut.service';

@Component({
  selector: 'app-haut',
  templateUrl: './haut.component.html',
  styleUrls: ['./haut.component.css']
})
export class HautComponent implements OnInit {

  hauts: Haut[];

  constructor(
    private service: HautService,
  ) { }

  ngOnInit(): void {
    this.initHaut();
  }

  initHaut(){
    this.service.findAll().subscribe(data => {
      this.hauts = data;
    })
  }
}
