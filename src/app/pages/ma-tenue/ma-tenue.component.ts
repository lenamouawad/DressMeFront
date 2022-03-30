import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  jour : number;
  periode : number;

  constructor(public router : Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.imToShow = 0;
    this.next = 0;
    this.showArrowLeft = false;
    this.showArrowRight = false;

    this.imgChoice = 0;
    this.jour = 0;
    this.periode = 0;
    
  }

  madeMyChoice(type : number){
    this.imgChoice = type;
    this.showArrowLeft = true;
   // this.showArrowRight = true;

    this.tenueType = type;
    this.next = 1;
  }

  clickArrowLeft(){

    if (this.next == 1)
      {
        this.tenueType = 0;
      }
    this.next -= 1;
    this.showArrowRight = false;
    if (this.next == 0)
    {
      this.imgChoice = 0;
      this.imToShow = 0;
    }
    this.periode = 0;
    this.jour = 0;
    
      

  }

  clickArrowRight(){

      this.next += 1;
      this.imToShow = 0;
      this.imgChoice = 0;
    
   
  }


}
