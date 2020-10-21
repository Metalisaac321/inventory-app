import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        "https://assets.reebok.com/images/w_600,f_auto,q_auto/6385d770a31a4937abebab03014effed_9366/Forever_Floatride_Energy_2_Women's_Running_Shoes_Black_EG2119_01_standard.jpg",
        ['Men', 'Shoes', 'Running Shoes'], 109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        "https://americanleatherjacket.com/image/cache/Captain%20America%20The%20Winter%20Soldier%20Steve%20Rogers%20Blue%20Jacket%20001-600x900w.jpg",
        ['Women', 'Apparel', 'Jackets & Vests'], 238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        "https://www.inboundcycle.com/hubfs/2-Images/Images_Posts_Blog/black-hat.jpg",
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

  ngOnInit(): void {
  }

}
