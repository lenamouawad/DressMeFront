import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleDTO } from '../models/articleDTO';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<ArticleDTO[]>{
    return this.http.get<ArticleDTO[]>(`http://localhost:56189/api/article/allArticles`);
  }

  findAllFavoris() : Observable<ArticleDTO[]>{
    return this.http.get<ArticleDTO[]>(`http://localhost:56189/api/article/favoris`);
  }

}
