import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/pages/products/products.component';
import { OrdersComponent } from './orders/pages/orders/orders.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormDialogComponent } from './products/pages/form-dialog/form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditFormDialogComponent } from './products/pages/edit-form-dialog/edit-form-dialog.component';
import { OrderFormDialogComponent } from './orders/pages/form-dialog/order-form-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrdersEditFormDialogComponent } from './orders/pages/orders-edit-form-dialog/orders-edit-form-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    NavigationComponent,
    FormDialogComponent,
    EditFormDialogComponent,
    OrderFormDialogComponent,
    OrdersEditFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
