import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpCommon } from '../core/http-common';
import { IOrder } from './models/IOrder';
import { ISaveOrder } from './models/ISaveOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _httpOptions: HttpCommon;
  constructor(private _http: HttpClient) {
    this._httpOptions = new HttpCommon("/orders");
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }
  getAll(): Observable<IOrder> {
    return this._http.get<IOrder>(this._httpOptions.basePath,this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createItem(item: any): Observable<ISaveOrder> {
    return this._http.post<ISaveOrder>(this._httpOptions.basePath,JSON.stringify(item),this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  deleteItem(id: number): Observable<IOrder> {
    return this._http.delete<IOrder>(`${this._httpOptions.basePath}/${id}`, this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  updateById(id: number, item: any): Observable<ISaveOrder> {
    return this._http.put<ISaveOrder>(`${this._httpOptions.basePath}/${id}`, JSON.stringify(item), this._httpOptions.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
