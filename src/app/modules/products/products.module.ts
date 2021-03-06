import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductsModule { }
