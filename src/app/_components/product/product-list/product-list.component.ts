import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: any;
  responseStatus = 200;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
        this.responseStatus = error.status;
      });
  }
}
