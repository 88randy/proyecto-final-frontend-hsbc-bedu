import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/_interface/customer.interface';
import { Product } from 'src/app/_interface/product.interface';
import { PurchaseOrder } from 'src/app/_interface/purchaseOrder.interface';
import { CustomerService } from 'src/app/_services/customer/customer.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { PurchaseOrderService } from 'src/app/_services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.css']
})
export class PurchaseOrderCreateComponent implements OnInit{
  purchaseOrder: PurchaseOrder = {
    id: 0,
    date: new Date(),
    customer: {id:0, customer:"1"},
    items: [],
  };
  order: any;
  customers!: Customer[];
  products!: Product[];

  constructor(private purchaseOrderService: PurchaseOrderService, 
    private router: Router, 
    private customerService: CustomerService, 
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });

    this.productService.getProductsList().subscribe(data => {
      this.products = data;
      this.purchaseOrder.items = [{ product: this.products[0], quantity: 1 }];
    });
  }

  onSubmit() {
    this.purchaseOrderService.createPurchaseOrder(this.purchaseOrder).subscribe(data => {
      console.log(data);
      this.router.navigate(['purchase-orders']);
    }, error => console.log(error));
  }

  getProductPrice(productId: number): number {
    const product = this.products.find(p => p.id === productId);
    return product ? product.price : 0;
  }

  addItem() {
    this.purchaseOrder.items.push({ product: this.products[0], quantity: 1 });
  }
  
  removeItem(index: number) {
    this.purchaseOrder.items.splice(index, 1);
  }
  
  getTotal() {
    return this.purchaseOrder.items.reduce((total, item) => {
      const productPrice = this.getProductPrice(item.product.id);
      return total + (productPrice * item.quantity);
    }, 0);
  }
}