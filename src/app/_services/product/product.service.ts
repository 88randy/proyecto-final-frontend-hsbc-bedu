import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://hsbcbedu-env.eba-jjfsw8ss.us-east-1.elasticbeanstalk.com/api/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product): Observable<object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, product: Product): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
