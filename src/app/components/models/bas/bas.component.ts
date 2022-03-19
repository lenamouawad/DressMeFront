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

  constructor(
    private service: BasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
