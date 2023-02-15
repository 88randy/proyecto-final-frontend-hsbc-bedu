import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{
  id!: number;
  updateForm!: FormGroup;
  responseStatus = 200;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute) 
    { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.getProduct(this.id)
        .subscribe(data => {
          this.updateForm.setValue(data);
        }, error => {
          this.responseStatus = error.status;
        });
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.updateForm.value)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
