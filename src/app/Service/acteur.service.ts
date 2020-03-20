import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Acteur } from '../models/acteur.models';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {

  constructor(private http: HttpClient) { }

  getActeurs(): Observable<any> {
    return this.http.get('http://localhost:8000/acteur')
    .pipe (
      tap(data => {
        console.log(data)
      }),
      catchError(this.handleError('getActeurs', []))
    );
  }

  save(acteur: Acteur): Observable<Acteur>{
    return this.http.post<Acteur>('http://localhost:8000/acteur/add', acteur);
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

