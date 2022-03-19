import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-tenue',
  templateUrl: './ma-tenue.component.html',
  styleUrls: ['./ma-tenue.component.css']
})
export class MaTenueComponent implements OnInit {

  imToShow : number;

  constructor() { }

  ngOnInit(): void {
    this.imToShow = 0;
  }

  showPic(show : number){
    this.imToShow = show;
  }

}
