import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bas } from '../models/bas';
import { Matiere } from '../enums/matiere';
import { Motifs } from '../enums/motifs';
import { Types } from '../enums/types';
import { CategorieBas } from '../enums/categoriesBas';

@Injectable({
  providedIn: 'root'
})
export class BasService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas`);
  }

  findById(id: string) : Observable<Bas>{
    return this.http.get<Bas>(`http://localhost:56189/api/bas/${id}`);
  }

  findByMatiere(matiere: Matiere) : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas/matiere/${matiere}`);
  }

  findByMotif(motif: Motifs) : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas/motif/${motif}`);
  }

  findByType(type: Types) : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas/type/${type}`);
  }

  findByCategorie(categorie: CategorieBas) : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas/categorie/${categorie}`);
  }

  create(bas: Bas) : Observable<Bas>{
    return this.http.post<Bas>(`http://localhost:56189/api/bas/`, bas);
  }

  update(id: string, bas: Bas) : Observable<Bas>{
    return this.http.put<Bas>(`http://localhost:56189/api/bas/${id}`, bas);
  }

  delete(id: string) : Observable<Bas>{
    return this.http.delete<Bas>(`http://localhost:56189/api/bas/${id}`);
  }

  estFavoris(id: string, bas: Bas) : Observable<Bas>{
    return this.http.put<Bas>(`http://localhost:56189/api/bas/estFavoris/${id}`, bas);
  }

  findAllFavoris() : Observable<Bas[]>{
    return this.http.get<Bas[]>(`http://localhost:56189/api/bas/AllFavoris`);
  }
}
