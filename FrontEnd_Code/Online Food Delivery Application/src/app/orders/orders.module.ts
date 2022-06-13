import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ViewAllOrdersComponent } from './view-all-orders/view-all-orders.component';
import { ViewOrderByIdComponent } from './view-order-by-id/view-order-by-id.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddOrderComponent,
    DeleteOrderComponent,
    UpdateOrderComponent,
    ViewAllOrdersComponent,
    ViewOrderByIdComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class OrdersModule { }
