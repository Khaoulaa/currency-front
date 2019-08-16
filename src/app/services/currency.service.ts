import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
   apiUrl = environment.api;
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
  };
  constructor(private _httpClient: HttpClient) { }

  getAllCurrencies(maxSize: number, field: string , text: string) : Observable<any> {
    let criteria = {
      field : field,
      text : text.length === 0 ? null : text
    };
    return this._httpClient.post<any>(this.apiUrl + '/currencies/' + maxSize , criteria , this.httpOptions);
  }
  getCurrencyById(id: String): Observable<any>{
    return this._httpClient.get(this.apiUrl + '/currency/' + id, this.httpOptions );
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Server Side Error: ', errorResponse);
    }

    return Observable.throw(errorResponse.message || 'Server Error');
  }
}
