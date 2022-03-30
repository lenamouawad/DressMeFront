import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenue } from '../models/tenue';


@Injectable({
  providedIn: 'root'
})
export class TenueService {

  constructor(private http: HttpClient) { }

  /*public findAll() : Observable<Tenue[]>{
    return this.http.get<Tenue[]>("http://localhost:56189/api/tenue/allTenue");
  }*/

  public ProposerTenue(meteo: string, type: string) : Observable<Tenue>{
    return this.http.get<Tenue>(`http://localhost:56189/api/tenue/${meteo}/${type}`);
  }

}

