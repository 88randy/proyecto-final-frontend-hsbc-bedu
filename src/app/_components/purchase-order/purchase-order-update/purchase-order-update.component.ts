import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/_interface/customer.interface';
import { Product } from 'src/app/_interface/product.interface';
import { PurchaseOrder } from 'src/app/_interface/purchaseOrder.interface';
import { CustomerService } from 'src/app/_services/customer/customer.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { PurchaseOrderService } from 'src/app/_services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-purchase-order-update',
  templateUrl: './purchase-order-update.component.html',
  styleUrls: ['./purchase-order-update.component.css']
})
export class PurchaseOrderUpdateComponent implements OnInit {
  id!: number;
  purchaseOrder: PurchaseOrder = {
    id: 0,
    date: new Date(),
    customer: { id: 0, customer: "1" },
    items: [],
  };
  customers!: Customer[];
  products!: Product[];
  newProduct: Product = {id:0, name:"", price:0};
  newQuantity: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private purchaseOrderService: PurchaseOrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.purchaseOrderService.getPurchaseOrder(this.id).subscribe(data => {
      this.purchaseOrder = data;
      this.customerService.getCustomersList().subscribe(customers => {
        this.customers = customers;
        this.purchaseOrder.customer = this.customers.find(c => c.id === this.purchaseOrder.customer.id)!;
      });
      this.productService.getProductsList().subscribe(products => {
        this.products = products;
        this.purchaseOrder.items.forEach(item => {
          item.product = this.products.find((product) => product.id === item.product.id)!;
        });
      });
    }, error => console.log(error));
  }

  updatePurchaseOrder() {
    this.purchaseOrderService.updatePurchaseOrder(this.id, this.purchaseOrder).subscribe(data => {
      this.router.navigate(['purchase-orders']);
    }, error => console.log(error));
  }

  addProduct() {
    if (this.newProduct && this.newQuantity > 0) {
        const newItem = {
            product: { ...this.newProduct },
            quantity: this.newQuantity
        };
        this.purchaseOrder.items.push(newItem);
        this.newProduct = this.products[0];
        this.newQuantity = 1;
    }
  }

  removeProduct(index: number) {
    this.purchaseOrder.items.splice(index, 1);
  }

  getTotal(): number {
    let total = 0;
    this.purchaseOrder.items.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
}
