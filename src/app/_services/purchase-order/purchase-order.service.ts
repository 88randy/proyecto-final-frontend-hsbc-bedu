import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from 'src/app/_interface/purchaseOrder.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  
  private baseUrl = 'http://hsbcbedu-env.eba-jjfsw8ss.us-east-1.elasticbeanstalk.com/api/purchase-orders';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPurchaseOrder(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

/*   createPurchaseOrder(purchaseOrder: PurchaseOrder): Observable<object> {
    return this.http.post(`${this.baseUrl}`, purchaseOrder);
  } */

  createPurchaseOrder(purchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(`${this.baseUrl}`, purchaseOrder, this.httpOptions);
  }

  updatePurchaseOrder(id: number, purchaseOrder: PurchaseOrder): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, purchaseOrder);
  }

  deletePurchaseOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPurchaseOrderList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
