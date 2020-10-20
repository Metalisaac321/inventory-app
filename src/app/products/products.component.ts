import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = new Product(
      "NICEHAT",
      "A Nice Black Hat",
      "/resources/images/products/black-hat.jpg",
      ["Men", "Accessories", "Hats"],
      29.99
    );
  }

  ngOnInit(): void {
  }

}
