import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Haut } from '../models/haut';


@Injectable({
  providedIn: 'root'
})
export class HautService {

  constructor(private http: HttpClient) { }

  public findAll() : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/allHauts`);
  }

 public findById(id: string) : Observable<Haut>{
    return this.http.get<Haut>(`http://localhost:56189/api/hauts/id/${id}`);
  }

  public findByMatiere(matiere: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/matiere/${matiere}`);
  }

  public findByMotif(motif: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/motif/${motif}`);
  }

  public findByType(type: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/type/${type}`);
  }

  public findByCategorie(categrie: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/categorie/${categrie}`);
  }

  public findByManche(manche: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/manches/${manche}`);
  }

  public create(haut: Haut) : Observable<Haut>{
    return this.http.post<Haut>(`http://localhost:56189/api/hauts/`, haut);
  }

  public update(id: string, haut: Haut) : Observable<Haut>{
    return this.http.put<Haut>(`http://localhost:56189/api/hauts/update/${id}`, haut);
  }

  public delete(id: string) : Observable<Haut>{
    return this.http.delete<Haut>(`http://localhost:56189/api/hauts/delete/${id}`);
  }

  /*estFavoris(id: string) : Observable<Haut>{
    return this.http.put<Haut>(`http://localhost:56189/api/hauts/estFavoris/${id}`);
  }*/

  public findAllFavoris() : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/hauts/AllFavoris`);
  }
}
