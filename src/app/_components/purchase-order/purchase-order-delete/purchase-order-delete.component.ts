import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/_services/purchase-order/purchase-order.service';

@Component({
  selector: 'app-purchase-order-delete',
  templateUrl: './purchase-order-delete.component.html',
  styleUrls: ['./purchase-order-delete.component.css']
})
export class PurchaseOrderDeleteComponent implements OnInit{
  id!: number;
  purchaseOrder: any;

  constructor(private purchaseOrderService: PurchaseOrderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.purchaseOrder = {};
    this.id = this.route.snapshot.params['id'];

    this.purchaseOrderService.getPurchaseOrder(this.id)
      .subscribe(data => {
        console.log(data);
        this.purchaseOrder = data;
      }, error => console.log(error));
  }

  deletePurchaseOrder() {
    this.purchaseOrderService.deletePurchaseOrder(this.id)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/purchase-orders']);
      }, error => console.log(error));
  }
}
