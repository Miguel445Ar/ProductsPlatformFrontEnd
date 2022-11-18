import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductsService } from '../../products.service';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { EditFormDialogComponent } from '../edit-form-dialog/edit-form-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  _products: IProduct[];
  _displayedColumns: string[];

  constructor(private _productsService: ProductsService, public dialog: MatDialog) {
    this._products = [];
    this._displayedColumns = ["code","name","description","stock","unit_price","actions"];
   }

  ngOnInit(): void {
    this._productsService.getAll().subscribe( (response: any) => {
      this._products = response;
      console.log(this._products);
    });
  }

  editProduct(element: any) {
    let dialogRef = this.dialog.open(EditFormDialogComponent, {data: element});
    dialogRef.afterClosed().subscribe(() => {
      this.getAllProducts();
    });
  }

  getAllProducts() {
    this._productsService.getAll().subscribe( (response: any) => {
      this._products = response;
      console.log(this._products);
    });
  }

  deleteProduct(id: number) {
    this._productsService.deleteItem(id).subscribe( (response: any) => {
      this.getAllProducts();
    } )
  }
  createProduct() {
    let dialogRef = this.dialog.open(FormDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllProducts();
    });
  }

}
