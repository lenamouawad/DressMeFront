import { Component, OnInit } from '@angular/core';
import{Haut} from 'src/app/models/haut';
import{Bas} from 'src/app/models/bas';
import { HautService } from 'src/app/services/haut.service';
import { BasService } from 'src/app/services/bas.service';

@Component({
  selector: 'app-mon-dressing',
  templateUrl: './mon-dressing.component.html',
  styleUrls: ['./mon-dressing.component.css']
})
export class MonDressingComponent implements OnInit {

  hauts:Haut[];
  bas:Bas [];

  hautsToShow:Haut[];
  basToShow:Bas[];

  whatToShow : number;

  constructor(private hautService : HautService, private basService : BasService) { }

  ngOnInit(): void {
    this.initHauts();
    this.initBas();
    this.initImagesToShow();

    this.initWhatToShow();
  }

  initHauts(){
    this.hautService.findAll().subscribe(data => {this.hauts = data;});
  }
  initBas(){
    this.basService.findAll().subscribe(data => {this.bas = data;});
  }
  initImagesToShow(){    
    this.hautService.findAll().subscribe(data => {this.hautsToShow = data.slice(0,8);});
    this.basService.findAll().subscribe(data => {this.basToShow = data.slice(0,8);});

    if (this.hauts.length>8) /* length doesnt work on property... */
     {
    this.hautService.findAll().subscribe(data => {this.hautsToShow = data.slice(0,8);});
      }
  else
  {
    this.hautsToShow = this.hauts;
  }
  if (this.bas.length>8)
     {
      this.basService.findAll().subscribe(data => {this.basToShow = data.slice(0,8);});
    }
  else
  {
    this.basToShow =this.bas;
  }
}
  initWhatToShow(){this.showImages(0);}

   showArrows() : boolean{
    if (this.hauts.length > 8){  /* a changer -> all hauts et bas*/
      return true;
    }
    else{
      return false;
    }
  }

  showImages(categorie : number) {
    var nbr = 0;
    if (categorie==0)
    {
      nbr = 0;
    }
    else if (categorie==1)
    {
      nbr =  1;
    }
    else if (categorie==2)
    {
      nbr =2;
    }
    this.whatToShow = nbr;
  }



}
