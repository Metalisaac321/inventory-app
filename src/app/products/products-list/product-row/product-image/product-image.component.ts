import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'product-image',
  template: `
    <img class="h-32 w-32" [src]="product.imageUrl">
  `,
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'justify-self-end mr-6';
}
