import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/component/cart/cart.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/component/products-details/products-details.component';

const routes: Routes = [
  {path: "products", component: AllProductsComponent},
  {path: "details", component: ProductsDetailsComponent},
  {path: "carts", component: CartComponent},
  {path: "**", redirectTo: "products", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
