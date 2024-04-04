import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  // API
  getProducts()
  {
   return this.http.get<any>(this.apiUrl)
          .pipe()
          .subscribe(response => {
            this.products = response.data;
            console.log(this.products);            
          });
  }

  // Not API
  postProduct(product: Product) {
    this.products.push(product);
  }
}
