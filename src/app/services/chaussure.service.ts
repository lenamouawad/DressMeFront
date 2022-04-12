import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chaussure } from '../models/chaussure';
import { Matiere } from '../enums/matiere';
import { Motifs } from '../enums/motifs';
import { Types } from '../enums/types';
import { CategorieChaussure } from '../enums/categoriesChaussure';


@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure`);
  }

  findById(id: string) : Observable<Chaussure>{
    return this.http.get<Chaussure>(`http://localhost:56189/api/chaussure/${id}`);
  }

  findByMatiere(matiere: Matiere) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/matiere/${matiere}`);
  }

  findByMotif(motif: Motifs) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/motif/${motif}`);
  }

  findByType(type: Types) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/type/${type}`);
  }

  findByCategorie(categorie: CategorieChaussure) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/categorie/${categorie}`);
  }

  findByCategoriesMeteo(meteo: string) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/categories/${meteo}`);
  }

  create(chaussure: Chaussure) : Observable<Chaussure>{
    return this.http.post<Chaussure>(`http://localhost:56189/api/chaussure/`, chaussure);
  }

  update(id: string, chaussure: Chaussure) : Observable<Chaussure>{
    return this.http.put<Chaussure>(`http://localhost:56189/api/chaussure/${id}`, chaussure);
  }

  delete(id: string) : Observable<Chaussure>{
    return this.http.delete<Chaussure>(`http://localhost:56189/api/chaussure/${id}`);
  }

  estFavoris(id: string, chaussure: Chaussure) : Observable<Chaussure>{
    return this.http.put<Chaussure>(`http://localhost:56189/api/chaussure/estFavoris/${id}`, chaussure);
  }

  findAllFavoris() : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/AllFavoris`);
  }
}
