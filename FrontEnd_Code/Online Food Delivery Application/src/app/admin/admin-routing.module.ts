import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AddItemComponent } from '../item/add-item/add-item.component';
import { ViewAllItemsComponent } from '../item/view-all-items/view-all-items.component';
import { AddRestaurantComponent } from '../restaurant/add-restaurant/add-restaurant.component';
import { ViewAllRestaurantsComponent } from '../restaurant/view-all-restaurants/view-all-restaurants.component';
import { AdminComponent } from './admin.component';

const routes:Routes=[
  {path:'admin',component:AdminComponent,
  
 children:[
   {path:'viewAllItems',component:ViewAllItemsComponent},
   {path:'viewAllRestaurants',component:ViewAllRestaurantsComponent},
   {path:'addItem',component:AddItemComponent},
   {path:'addRestaurant',component:AddRestaurantComponent},

 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
