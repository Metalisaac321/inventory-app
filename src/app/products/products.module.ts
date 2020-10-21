import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './products-list/product-row/product-row.component';
import { ProductImageComponent } from './products-list/product-row/product-image/product-image.component';
import { PriceDisplayComponent } from './products-list/product-row/price-display/price-display.component';
import { ProductDepartmentComponent } from './products-list/product-row/product-department/product-department.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
