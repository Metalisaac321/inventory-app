import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'grid grid-cols-3 border-2 hover:border-indigo-500';
}
