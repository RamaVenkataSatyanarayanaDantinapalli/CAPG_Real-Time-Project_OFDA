import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllItemsComponent } from './item/view-all-items/view-all-items.component';
import { ViewAllRestaurantsComponent } from './restaurant/view-all-restaurants/view-all-restaurants.component';
import { ViewRestaurantItemsComponent } from './restaurant/view-restaurant-items/view-restaurant-items.component';
import { ViewRestaurantByIdComponent } from './restaurant/view-restaurant-by-id/view-restaurant-by-id.component';
import { UpdateRestaurantComponent } from './restaurant/update-restaurant/update-restaurant.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';
import { ViewItemByIdComponent } from './item/view-item-by-id/view-item-by-id.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { ViewItemComponent } from './item/view-item/view-item.component';
import { ViewItemsByCategoryComponent } from './item/view-items-by-category/view-items-by-category.component';
import { ViewItemsByNameComponent } from './item/view-items-by-name/view-items-by-name.component';
import { UserViewAllItemsComponent } from './user-item/user-view-all-items/user-view-all-items.component';
import { UserViewItemComponent } from './user-item/user-view-item/user-view-item.component';
import { ViewItemsByRestaurantComponent } from './item/view-items-by-restaurant/view-items-by-restaurant.component';
import { UserViewItemByIdComponent } from './user-item/user-view-item-by-id/user-view-item-by-id.component';
import { UserViewItemByNameComponent } from './user-item/user-view-item-by-name/user-view-item-by-name.component';
import { UserViewItemByCategoryComponent } from './user-item/user-view-item-by-category/user-view-item-by-category.component';
import { UserViewItemsByRestaurantComponent } from './user-item/user-view-items-by-restaurant/user-view-items-by-restaurant.component';
import { ViewRestaurantByNameComponent } from './restaurant/view-restaurant-by-name/view-restaurant-by-name.component';
import { ViewRestaurantByPincodeComponent } from './restaurant/view-restaurant-by-pincode/view-restaurant-by-pincode.component';
import { ViewRestaurantByCityComponent } from './restaurant/view-restaurant-by-city/view-restaurant-by-city.component';
import { ViewRestaurantByItemComponent } from './restaurant/view-restaurant-by-item/view-restaurant-by-item.component';
import { UserViewRestaurantByIdComponent } from './user-restaurant/user-view-restaurant-by-id/user-view-restaurant-by-id.component';
import { UserViewRestaurantByNameComponent } from './user-restaurant/user-view-restaurant-by-name/user-view-restaurant-by-name.component';
import { UserViewRestaurantByPincodeComponent } from './user-restaurant/user-view-restaurant-by-pincode/user-view-restaurant-by-pincode.component';
import { UserViewRestaurantByCityComponent } from './user-restaurant/user-view-restaurant-by-city/user-view-restaurant-by-city.component';
import { UserViewRestaurantByItemComponent } from './user-restaurant/user-view-restaurant-by-item/user-view-restaurant-by-item.component';
import { UserViewAllRestaurantsComponent } from './user-restaurant/user-view-all-restaurants/user-view-all-restaurants.component';
import { ViewRestaurantComponent } from './restaurant/view-restaurant/view-restaurant.component';
import { UserViewRestaurantComponent } from './user-restaurant/user-view-restaurant/user-view-restaurant.component';
import { UserViewRestaurantItemsComponent } from './user-restaurant/user-view-restaurant-items/user-view-restaurant-items.component';
import { UpdateRestaurantAddressComponent } from './restaurant/update-restaurant-address/update-restaurant-address.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { AddRestaurantAddressComponent } from './restaurant/add-restaurant-address/add-restaurant-address.component';
import {AddOrderComponent} from './orders/add-order/add-order.component';
import { UpdateOrderComponent } from './orders/update-order/update-order.component';
import { ViewAllOrdersComponent } from './orders/view-all-orders/view-all-orders.component';
import { ViewOrderByIdComponent } from './orders/view-order-by-id/view-order-by-id.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { AddCustomerAddressComponent } from './customers/add-customer-address/add-customer-address.component';
import { UpdateCustomerAddressComponent } from './customers/update-customer-address/update-customer-address.component';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CartComponent } from './cart/cart.component';
const routes:Routes=[
  {path:'app',component:AppComponent},
 
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'addItem',component:AddItemComponent},
  {path:'updateItem',component:UpdateItemComponent},
  {path:'viewAllItems',component:ViewAllItemsComponent},
  {path:'viewAllItems',component:ViewAllItemsComponent},
  {path:'viewItem',component:ViewItemComponent},
  {path:'viewItem',component:ViewItemComponent},
  {path:'viewItemById',component:ViewItemByIdComponent},
  {path:'viewItemsByName',component:ViewItemsByNameComponent},
  {path:'viewItemsByCategory',component:ViewItemsByCategoryComponent},
  {path:'viewItemsByRestaurant',component:ViewItemsByRestaurantComponent},

  {path:'UserViewAllItems',component:UserViewAllItemsComponent},
  {path:'userViewItem',component:UserViewItemComponent},
  {path:'userViewItemById',component:UserViewItemByIdComponent},
  {path:'userViewItemsByName',component:UserViewItemByNameComponent},
  {path:'userViewItemsByCategory',component:UserViewItemByCategoryComponent},
  {path:'userViewItemsByRestaurant',component:UserViewItemsByRestaurantComponent},

  {path:'addRestaurant',component:AddRestaurantComponent},
  {path:'addRestaurantAddress',component:AddRestaurantAddressComponent},
 // {path:'addRestaurantItems',component:AddRestaurantItemsComponent},
  {path:'updateRestaurant',component:UpdateRestaurantComponent},
  {path:'updateRestaurantAddress',component:UpdateRestaurantAddressComponent},
  {path:'viewAllRestaurants',component:ViewAllRestaurantsComponent},
  {path:'viewRestaurantItems',component:ViewRestaurantItemsComponent},
  {path:'viewRestaurant',component:ViewRestaurantComponent},
  {path:'viewRestaurantById',component:ViewRestaurantByIdComponent},
  {path:'viewRestaurantById',component:ViewRestaurantByIdComponent},
  {path:'viewRestaurantByName',component:ViewRestaurantByNameComponent},
  {path:'viewRestaurantByPincode',component:ViewRestaurantByPincodeComponent},
  {path:'viewRestaurantByCity',component:ViewRestaurantByCityComponent},
  {path:'viewRestaurantByItem',component:ViewRestaurantByItemComponent},

  {path:'userViewAllRestaurants',component:UserViewAllRestaurantsComponent},
  {path:'userViewRestaurant',component:UserViewRestaurantComponent},
  {path:'userViewRestaurantItems',component:UserViewRestaurantItemsComponent},
  {path:'userViewRestaurantById',component:UserViewRestaurantByIdComponent},
  {path:'userViewRestaurantByName',component:UserViewRestaurantByNameComponent},
  {path:'userViewRestaurantByPincode',component:UserViewRestaurantByPincodeComponent},
  {path:'userViewRestaurantByCity',component:UserViewRestaurantByCityComponent},
  {path:'userViewRestaurantByItem',component:UserViewRestaurantByItemComponent},

  {path:'addOrder',component:AddOrderComponent},
  {path:'updateOrder',component:UpdateOrderComponent},
  {path:'viewAllOrders',component:ViewAllOrdersComponent},
  {path:'viewOrderById',component:ViewOrderByIdComponent},

  {path:'addCustomer',component:AddCustomerComponent},
  {path:'addCustomerAddress',component:AddCustomerAddressComponent},
  {path:'updateCustomer',component:EditCustomerComponent},
  {path:'updateCustomerAddress',component:UpdateCustomerAddressComponent},
  {path:'viewAllCustomers',component:CustomerListComponent},

  {path:'cart',component:CartComponent},
  

  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
