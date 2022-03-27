import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-tenue',
  templateUrl: './ma-tenue.component.html',
  styleUrls: ['./ma-tenue.component.css']
})
export class MaTenueComponent implements OnInit {

  imToShow : number;
  next : number;
  imgChoice : number;
  showArrowLeft : boolean;
  showArrowRight : boolean;

  tenueType : number;
  constructor() { }

  ngOnInit(): void {
    this.imToShow = 0;
    this.next = 0;
    this.showArrowLeft = false;
    this.showArrowRight = false;

    this.imgChoice = 0;
  }

  madeMyChoice(type : number){
    this.imgChoice = type;
    this.showArrowLeft = true;
   // this.showArrowRight = true;

    this.tenueType = type;
    this.next = 1;
  }

  clickArrowLeft(){

    this.next -= 1;
    this.showArrowRight = false;
    if (this.next == 0)
    {
      this.imgChoice = 0;
      this.imToShow = 0;
    }

  }

  clickArrowRight(){

    this.next += 1;
    this.imToShow = 0;
    this.imgChoice = 0;
  }


}
