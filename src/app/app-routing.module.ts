import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardItemComponent
  },
  {
    path:'product',
    component:ProductItemComponent
  },
  {
    path:'stock',
    component:StockItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
