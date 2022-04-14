import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocalisationService {

  constructor(private http: HttpClient) { }

  public getCity(): Observable<string>{
    return this.http.get<string>(``);
  }
}
