import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Noticia } from '../dtos/Noticia'
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  get<T>(url: string) {
    return this.http.get<T>(environment.url + url);
  }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(environment.url + '/noticia');
  }

  getNoticiaId(id: string): Observable<Noticia> {
    return this.http.get<Noticia>(environment.url + `/noticia/${id}`);
  }

  post<T>(url: string, objeto: any) {
    return this.http.post<T>(environment.url + url, objeto, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  put<T>(url: string, objeto: any) {
    return this.http.put<T>(environment.url + url, objeto, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  delete<T>(url: string, id: string) {
    return this.http.delete<T>(environment.url + url + id, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  getCovid<T>() {
    return this.http.get<T>('https://corona.lmao.ninja/v2/all?yesterday=');
  }
}
