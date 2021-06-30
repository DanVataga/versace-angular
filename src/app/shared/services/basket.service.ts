import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interfaces';


@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/basket';
  }

  getOneProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }

  postJSONProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.post<Array<IProduct>>(this.url, product);
  }
}
