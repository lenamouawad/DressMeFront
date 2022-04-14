import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meteo } from '../models/meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  public findMeteoByCity(city: string): Observable<Meteo>{
    return this.http.get<Meteo>(`//localhost:56189/api/meteo/city/${city}`);
  }
  
}
