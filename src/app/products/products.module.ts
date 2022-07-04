import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
