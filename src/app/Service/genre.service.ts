import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Genre } from '../models/genre.models';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/genre')
    .pipe (
      tap(data => {
        console.log(data)
      }),
      catchError(this.handleError('getGenres', []))
    );
  }

  find(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8000/genre/' + id);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>('http://localhost:8000/genre/delete/' + id);
  }

  save(genre: Genre): Observable<Genre>{
    return this.http.post<Genre>('http://127.0.0.1:8000/genre/add', genre);
  }

  uptdate(genre: Genre): Observable<void>{
    return this.http.put<void>('http://localhost:8000/genre/edit/' + genre.id, genre);
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
