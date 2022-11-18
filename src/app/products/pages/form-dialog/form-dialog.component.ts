import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISaveProduct } from '../../models/ISaveProduct';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  productItem: ISaveProduct;
  
  constructor(private _productsService: ProductsService) {
    this.productItem = {} as ISaveProduct;
   }

  ngOnInit(): void {
  }
  addNewItem() {
    this._productsService.createItem(this.productItem).subscribe((response: any) => {});
  }

}
