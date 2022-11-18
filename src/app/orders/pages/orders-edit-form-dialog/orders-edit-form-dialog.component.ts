import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from 'src/app/products/products.service';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-orders-edit-form-dialog',
  templateUrl: './orders-edit-form-dialog.component.html',
  styleUrls: ['./orders-edit-form-dialog.component.css']
})
export class OrdersEditFormDialogComponent implements OnInit {
  orderItem: any;
  lastValueItem: any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any, private _ordersService: OrdersService, private _productsService: ProductsService) { 
    this.orderItem = {...data};
    this.lastValueItem = {...data};
  }

  ngOnInit(): void {

  }

  updateItem() {
    const newOrder = {
      totalPrice: 0.0,
      deliveryDate: this.orderItem.deliveryDate,
      requestedUnits: parseFloat(this.orderItem.requestedUnits),
      productsId: null
    };
    console.log(newOrder);
    if(!this.orderItem.product.code || !this.orderItem.requestedUnits)
      return;
    this._productsService.getByCode(this.orderItem.product.code).subscribe((response: any) => {
      newOrder.productsId = response.id;
      newOrder.totalPrice = parseFloat((response.unitPrice * newOrder.requestedUnits).toFixed(2));
      response.stock = response.stock + this.lastValueItem.requestedUnits;
      if(response.stock - newOrder.requestedUnits < 0) return;
      response.stock -= newOrder.requestedUnits;
      this._productsService.updateById(response.id,response).subscribe(() => {});
      this._ordersService.updateById(this.orderItem.id,newOrder).subscribe((response: any) => {});
    });
  }

}
