import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewItemByIdComponent } from './view-item-by-id/view-item-by-id.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { ViewItemsByCategoryComponent } from './view-items-by-category/view-items-by-category.component';
import { ViewItemsByNameComponent } from './view-items-by-name/view-items-by-name.component';
@NgModule({
  declarations: [ViewItemByIdComponent,UpdateItemComponent,AddItemComponent,ViewItemComponent,ViewItemsByCategoryComponent,ViewItemsByNameComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  exports:[
    FormsModule
  ]
})
export class ItemModule { }
