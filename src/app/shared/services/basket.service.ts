import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketProd } from '../interfaces/basket.interfaces';
import { IProduct } from '../interfaces/product.interfaces';


@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private url: string;
  private sum: number;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/basket';
  }

  getOneProduct(id: number): Observable<IBasketProd> {
    return this.http.get<IBasketProd>(`${this.url}/${id}`)
  }

  getJSONProducts(): Observable<Array<IBasketProd>> {
    return this.http.get<Array<IBasketProd>>(this.url);
  }

  postJSONProducts(product: IBasketProd): Observable<Array<IBasketProd>> {
    return this.http.post<Array<IBasketProd>>(this.url, product);
  }

  deleteJSONProducts(id: number): Observable<Array<IBasketProd>> {
    return this.http.delete<Array<IBasketProd>>(`${this.url}/${id}`);
  }

  // updatePrice(price: number): Observable<IBasketProd> {
  //   return this.sum
  // }
}
