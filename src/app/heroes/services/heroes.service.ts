import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  baseUrl = environment.baseUrl;

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }
  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  getSugerencias(query: string): Observable<Heroe[]> {
    const params: HttpParams = new HttpParams()
      .set('_limit', 5)
      .set('q', query);
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`, { params });
  }
  constructor(private http: HttpClient) {}
}
