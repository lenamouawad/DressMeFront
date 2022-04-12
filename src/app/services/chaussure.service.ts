import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chaussure } from '../models/chaussure';


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

  findByMatiere(matiere: string) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/matiere/${matiere}`);
  }

  findByMotif(motif: string) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/motif/${motif}`);
  }

  findByType(type: string) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/type/${type}`);
  }

  findByCategorie(categrie: string) : Observable<Chaussure[]>{
    return this.http.get<Chaussure[]>(`http://localhost:56189/api/chaussure/categorie/${categrie}`);
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
