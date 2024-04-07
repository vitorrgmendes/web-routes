import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

export interface Product {
  id: number;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  products: Product[] = [];
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  // LIST
  getProducts(): Observable<Product[]> {
    return this.http.get<{data: Product[]}>(this.apiUrl).pipe(
      map(response => response.data),
      tap((products: Product[]) => {
        this.products = products;
      })
    );
  }

  // REGISTER
  postProduct(product: { id: number, nome: string, preco: number }) {
    return this.http.post(this.apiUrl, product).pipe(
      catchError(error => {
        console.error('Error posting product:', error);
        return throwError(error);
      })
    );
  }
}
