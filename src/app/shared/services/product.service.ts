import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = '';

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/products';
  }

  getJSONProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.url);
  }

  postJSONProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.post<Array<IProduct>>(this.url, product);
  }

  deleteJSONProducts(id: number): Observable<Array<IProduct>> {
    return this.http.delete<Array<IProduct>>(`${this.url}/${id}`);
  }

  updateJSONProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.put<Array<IProduct>>(`${this.url}/${product.id}`, product);
  }

  getOneProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }


}
