import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Film } from '../models/film.models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<any> {
    return this.http.get('http://localhost:8000/film')
    .pipe (
      tap(data => {
        console.log(data)
      }),
      catchError(this.handleError('getFilms', []))
    );
  }

  find(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8000/film/' + id);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8000/film/delete/' + id);
  }

  save(film: Film): Observable<Film>{
    return this.http.post<Film>('http://localhost:8000/film/add/', film);
  }

  uptdate(film: Film): Observable<void>{
    return this.http.put<void>('http://localhost:8000/film/edit/', film);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}



