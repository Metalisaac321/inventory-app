import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  declarations: [ProductsListComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
