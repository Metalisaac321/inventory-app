import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product> = new EventEmitter();

}
