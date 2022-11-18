import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/pages/orders/orders.component';
import { ProductsComponent } from './products/pages/products/products.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/products", pathMatch: "full"
  },
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "orders", component: OrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
