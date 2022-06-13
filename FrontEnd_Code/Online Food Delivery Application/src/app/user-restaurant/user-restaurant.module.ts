import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UserRestaurantModule { }
