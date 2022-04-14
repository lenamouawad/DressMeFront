import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meteo } from 'src/app/models/meteo';
import { Tenue } from 'src/app/models/tenue';
import { MeteoService } from 'src/app/services/meteo.service';
import { TenueService } from 'src/app/services/tenue.service';

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
  tenueTypeToPass : string;
  jour : number;
  periode : number;
  meteo: Meteo;
  summary: string;
  temp: number;
  tenue : Tenue;

  constructor(
    public router : Router, 
    private tenueService : TenueService,
    private meteoService: MeteoService
    ) { 
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
    this.tenueType = type;
    this.next = 1;
  }

  clickArrowLeft(){
    if (this.next == 1)
      {
         this.tenueType = 0;
          this.imgChoice = 0;
         this.imToShow = 0;
         this.showArrowLeft = false;
      }
      if (this.next != 4){
        this.periode = 0;
        this.jour = 0;
      }
    if (this.next != 3){
      this.next -= 1;
    }
    else{
      this.next -= 2;
    }    
  }

  clickArrowRight(){

      this.next = 4;
      this.getMeteo("Paris");
      //this.initTenue();

  }

  initTenue(){
    // this.tenueType
    // this.periode
    // this.jour
    // appeler l'api pour la meteo ?
    switch ( this.tenueType ) {
      case 1:
        this.tenueTypeToPass = "decontracte";
        break;
      case 2:
        this.tenueTypeToPass = "habille";
        break;
      case 3:
        this.tenueTypeToPass = "sport";
        break;
      case 4:
        this.tenueTypeToPass = "soiree";
        break;
   }
    this.tenueService.ProposerTenue(this.summary, this.tenueTypeToPass).subscribe(data => {this.tenue = data;});
    
  }

  getMeteo(city: string){
    this.meteoService.findMeteoByCity(city).subscribe(data => {
      this.meteo = data;
      this.initSummary();
    });
  }

  initSummary(){
    console.log(this.meteo);
    this.temp = parseInt(this.meteo.temp);
    if(this.temp < 5) this.summary = 'froid';
    else if(this.temp >= 5 && this.temp < 15) this.summary = 'frais';
    else if(this.temp >= 15 && this.temp < 25) this.summary = 'bon';
    else this.summary = 'chaud';

    this.initTenue();
  }

}
