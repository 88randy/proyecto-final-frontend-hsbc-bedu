import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/_services/customer/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  id!: number;
  updateForm!: FormGroup;
  responseStatus = 200;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: [],
      customer: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.customerService.getCustomer(this.id)
        .subscribe(data => {
          this.updateForm.setValue(data);
        }, error => {
          this.responseStatus = error.status;
        });
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.updateForm.value)
      .subscribe(() => this.router.navigate(['/customers']));
  }
}
