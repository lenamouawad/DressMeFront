import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit {

  displaySettings : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  settings(){
    this.displaySettings = true;
  }
}
