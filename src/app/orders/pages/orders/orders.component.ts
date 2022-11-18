import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOrder } from '../../models/IOrder';
import { OrdersService } from '../../orders.service';
import { OrderFormDialogComponent } from '../form-dialog/order-form-dialog.component';
import { OrdersEditFormDialogComponent } from '../orders-edit-form-dialog/orders-edit-form-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  _orders: IOrder[];
  _displayedColumns: string[];

  constructor(private _ordersService: OrdersService, public dialog: MatDialog) {
    this._orders = [];
    this._displayedColumns = ["totalPrice","deliveryDate","requestedUnits","productCode","actions"];
  }


  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this._ordersService.getAll().subscribe((response: any) => {
      this._orders = response;
    });
  }
  createOrder() {
    const dialogRef = this.dialog.open(OrderFormDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllOrders();
    });
  }
  editOrder(order: any) {
    const dialogRef = this.dialog.open(OrdersEditFormDialogComponent, { data: order });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllOrders();
    });
  }
  deleteOrder(id: number) {
    this._ordersService.deleteItem(id).subscribe((response: any) => {
      this.getAllOrders();
    });
  }

}
