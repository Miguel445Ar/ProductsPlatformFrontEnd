import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './order-form-dialog.component.html',
  styleUrls: ['./order-form-dialog.component.css']
})
export class OrderFormDialogComponent implements OnInit {
  orderItem: any;
  constructor(public _ordersService: OrdersService, public _productsService: ProductsService) { 
    this.orderItem = {};
  }

  ngOnInit(): void {

  }
  addNewItem() {
    const newOrder = {
      totalPrice: 0.00,
      deliveryDate: this.orderItem.deliveryDate,
      requestedUnits: parseFloat(this.orderItem.requestedUnits),
      productsId: null
    };
    if(!this.orderItem.productCode || !this.orderItem.requestedUnits)
      return;
    this._productsService.getByCode(this.orderItem.productCode).subscribe((response: any) => {
      newOrder.productsId = response.id;
      newOrder.totalPrice = parseFloat((response.unitPrice * newOrder.requestedUnits).toFixed(2));
      if(response.stock - newOrder.requestedUnits < 0) return;
      response.stock -= newOrder.requestedUnits;
      this._productsService.updateById(response.id,response).subscribe(() => {});
      this._ordersService.createItem(newOrder).subscribe((response: any) => {});
    });
  }

}
