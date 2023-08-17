import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProductItemComponent } from './product-item/product-item.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PurchaseComponent } from './purchase/purchase.component';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    DashboardItemComponent,
    StockItemComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    NgbModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
