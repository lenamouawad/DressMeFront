import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bas } from 'src/app/models/bas';
import { BasService } from 'src/app/services/bas.service';


@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.css']
})
export class BasComponent implements OnInit {

  @Input() bas : Bas;
  id : string;

  constructor(
    private service: BasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.bas.id;
  }

  changeFavorites = () => {    
    this.service.estFavoris(this.id, this.bas).subscribe();
    this.bas.estFavoris = !this.bas.estFavoris;
  }

}
