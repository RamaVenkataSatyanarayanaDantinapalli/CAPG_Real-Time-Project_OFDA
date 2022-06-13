import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewRestaurantItemsComponent } from './view-restaurant-items/view-restaurant-items.component';
import { ViewRestaurantByIdComponent } from './view-restaurant-by-id/view-restaurant-by-id.component';
import { AppComponent } from '../app.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

@NgModule({
  declarations: [ViewRestaurantByIdComponent,UpdateRestaurantComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ViewRestaurantByIdComponent,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class RestaurantModule { }
