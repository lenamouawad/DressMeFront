import { Component, OnInit } from '@angular/core';
import { Tenue } from 'src/app/models/tenue';
import { TenueService } from 'src/app/services/tenue.service';

@Component({
  selector: 'app-tenue',
  templateUrl: './tenue.component.html',
  styleUrls: ['./tenue.component.css']
})
export class TenueComponent implements OnInit {

  tenues : Tenue[];

  constructor(
    private service: TenueService,
  ) { }

  ngOnInit(): void {
    this.initTenue();
  }

  initTenue(){
    this.service.findAll().subscribe(data => {
      this.tenues = data;
    })
  }

}
