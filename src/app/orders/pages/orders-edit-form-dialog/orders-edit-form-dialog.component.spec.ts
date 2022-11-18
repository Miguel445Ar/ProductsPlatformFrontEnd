import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEditFormDialogComponent } from './orders-edit-form-dialog.component';

describe('OrdersEditFormDialogComponent', () => {
  let component: OrdersEditFormDialogComponent;
  let fixture: ComponentFixture<OrdersEditFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersEditFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersEditFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
