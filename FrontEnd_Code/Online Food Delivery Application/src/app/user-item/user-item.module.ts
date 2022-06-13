import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [],
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
export class UserItemModule { }
