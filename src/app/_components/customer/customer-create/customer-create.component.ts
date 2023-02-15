import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      customer: ['', Validators.required]
    });
  }

  addCustomer() {
    this.customerService.createCustomer(this.createForm.value)
      .subscribe(data => {
        this.router.navigate(['customers']);
      });
  }
}
