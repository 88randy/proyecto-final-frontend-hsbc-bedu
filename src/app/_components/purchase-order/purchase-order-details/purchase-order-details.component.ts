import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PurchaseOrderService } from 'src/app/_services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-purchase-order-details',
  templateUrl: './purchase-order-details.component.html',
  styleUrls: ['./purchase-order-details.component.css']
})
export class PurchaseOrderDetailsComponent implements OnInit{
  id!: number;
  purchaseOrder: any;
  dateDisplayFormat = 'dd-MM-yyyy HH:mm:ss';

  constructor(
    private route: ActivatedRoute,
    private purchaseOrderService: PurchaseOrderService
  ) { }

  ngOnInit() {
    this.purchaseOrder = {};
    this.id = this.route.snapshot.params['id'];

    this.purchaseOrderService.getPurchaseOrder(this.id)
      .subscribe(data => {
        console.log(data);
        this.purchaseOrder = data;
      }, error => console.log(error));
  }

  getTotal(): number {
    let total = 0;
    if (this.purchaseOrder && this.purchaseOrder.items) {
      for (let item of this.purchaseOrder.items) {
        total += item.product.price * item.quantity;
      }
    }
    return total;
  }
}
