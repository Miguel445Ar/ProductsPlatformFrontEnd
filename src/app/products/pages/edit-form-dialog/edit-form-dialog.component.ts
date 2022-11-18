import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from '../../models/IProduct';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-edit-form-dialog',
  templateUrl: './edit-form-dialog.component.html',
  styleUrls: ['./edit-form-dialog.component.css']
})
export class EditFormDialogComponent implements OnInit {
  productItem: any;
  constructor(@Inject(MAT_DIALOG_DATA) data: any,private _productsService: ProductsService) { 
    this.productItem = data;
  }

  ngOnInit(): void {
  }
  updateItem() {
    this._productsService.updateById(this.productItem.id, this.productItem).subscribe((response: any) => {});
  }

}
