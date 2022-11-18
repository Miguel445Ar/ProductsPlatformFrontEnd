import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCommon } from '../core/http-common';
import {catchError, Observable, retry, throwError} from "rxjs";
import { IProduct } from './models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _httpOptions: HttpCommon;
  constructor(private _http: HttpClient) {
    this._httpOptions = new HttpCommon("/products");
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }
  getAll(): Observable<IProduct> {
    return this._http.get<IProduct>(this._httpOptions.basePath,this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createItem(item: any): Observable<IProduct> {
    return this._http.post<IProduct>(this._httpOptions.basePath,JSON.stringify(item),this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  deleteItem(id: number): Observable<IProduct> {
    return this._http.delete<IProduct>(`${this._httpOptions.basePath}/${id}`, this._httpOptions.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  updateById(id: number, item: any): Observable<IProduct> {
    return this._http.put<IProduct>(`${this._httpOptions.basePath}/${id}`, JSON.stringify(item), this._httpOptions.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
