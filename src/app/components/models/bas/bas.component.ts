import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bas } from 'src/app/models/bas';
import { BasService } from 'src/app/services/bas.service';


@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.css']
})
export class BasComponent implements OnInit {

  bas: Bas[];

  constructor(
    private service: BasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initBas();
  }

  initBas(){
    this.service.findAll().subscribe(data => {
      this.bas = data;
    })
  }

}
