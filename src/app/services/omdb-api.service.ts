import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDBResponse } from '../../omdbresponse';

@Injectable({
  providedIn: 'root'
})

export class OmdbApiService {
  private _siteURL = "http://www.omdbapi.com/";
  private _key ="?apikey=cae631ab&t=";
  constructor(private _http: HttpClient) { }

  getMovieData(movieName: string): Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(`${this._siteURL}${this._key}${movieName}`)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('OmdbAiService: '+ err.message);
    return throwError(() => { return new Error("OmdApiService" + err.message) });
  }
}
