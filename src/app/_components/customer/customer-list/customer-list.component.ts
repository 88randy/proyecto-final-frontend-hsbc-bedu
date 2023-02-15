import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/_services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: any;
  responseStatus = 200;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersList().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        console.log(error);
        this.responseStatus = error.status;
      });
  }

}
