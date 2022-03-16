import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Haut } from '../models/haut';


@Injectable({
  providedIn: 'root'
})
export class HautService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/allHauts`);
  }

  findById(id: string) : Observable<Haut>{
    return this.http.get<Haut>(`http://localhost:56189/api/haut/id/${id}`);
  }

  findByMatiere(matiere: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/matiere/${matiere}`);
  }

  findByMotif(motif: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/motif/${motif}`);
  }

  findByType(type: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/type/${type}`);
  }

  findByCategorie(categrie: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/categorie/${categrie}`);
  }

  findByManche(manche: string) : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/manches/${manche}`);
  }

  create(haut: Haut) : Observable<Haut>{
    return this.http.post<Haut>(`http://localhost:56189/api/haut/`, haut);
  }

  update(id: string, haut: Haut) : Observable<Haut>{
    return this.http.put<Haut>(`http://localhost:56189/api/haut/update/${id}`, haut);
  }

  delete(id: string) : Observable<Haut>{
    return this.http.delete<Haut>(`http://localhost:56189/api/haut/delete/${id}`);
  }

  /*estFavoris(id: string) : Observable<Haut>{
    return this.http.put<Haut>(`http://localhost:56189/api/haut/estFavoris/${id}`);
  }*/

  findAllFavoris() : Observable<Haut[]>{
    return this.http.get<Haut[]>(`http://localhost:56189/api/haut/AllFavoris`);
  }
}
