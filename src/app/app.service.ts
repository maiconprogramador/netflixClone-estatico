import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /*
  * Originais Netflix
  * recomendados (trending)
  * em alta (top rated)
  * ação
  * comédia
  * terror
  * roance
  * documentarios
  * 
  */

  private API_KEY = "877aedab5cd64b09a9e241978cc43829"
  private API_BASE = "https://api.themoviedb.org/3"

  constructor(private http: HttpClient) { }

  
  basicFetch(endpoint:any): Observable<any> {
    const req = this.http.get(`${this.API_BASE}${endpoint}`);
    return req;
  } 


  async getHomeList() {
    return [
      {
        slug: 'originals',
        title: 'Originais',
        items: await this.basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await  this.basicFetch(`/trending/all/week?language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await this.basicFetch(`/movie/top_rated?language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await this.basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await this.basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await this.basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await this.basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await this.basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${this.API_KEY}`).toPromise()
      }
    ];
  }

    
}
