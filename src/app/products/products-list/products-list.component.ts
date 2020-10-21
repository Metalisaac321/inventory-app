import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  @Input() productList: Product[];
  @HostBinding('class') cssClass = 'grid grid-cols-1 gap-4'

  @Output() onProductSelected: EventEmitter<Product> = new EventEmitter();
  currentProduct: Product;

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
