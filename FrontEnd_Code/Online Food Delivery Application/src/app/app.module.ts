import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ItemModule } from './item/item.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { UserItemModule } from './user-item/user-item.module';
import { UserRestaurantModule } from './user-restaurant/user-restaurant.module';
import { RegisterComponent } from './register/register.component';
import { ViewItemsByRestaurantComponent } from './item/view-items-by-restaurant/view-items-by-restaurant.component';
import { UserViewAllItemsComponent } from './user-item/user-view-all-items/user-view-all-items.component';
import { UserViewItemComponent } from './user-item/user-view-item/user-view-item.component';
import { UserViewItemByIdComponent } from './user-item/user-view-item-by-id/user-view-item-by-id.component';
import { UserViewItemByNameComponent } from './user-item/user-view-item-by-name/user-view-item-by-name.component';
import { UserViewItemByCategoryComponent } from './user-item/user-view-item-by-category/user-view-item-by-category.component';
import { UserViewItemsByRestaurantComponent } from './user-item/user-view-items-by-restaurant/user-view-items-by-restaurant.component';
import { ViewRestaurantComponent } from './restaurant/view-restaurant/view-restaurant.component';
import { ViewRestaurantByNameComponent } from './restaurant/view-restaurant-by-name/view-restaurant-by-name.component';
import { ViewRestaurantByPincodeComponent } from './restaurant/view-restaurant-by-pincode/view-restaurant-by-pincode.component';
import { ViewRestaurantByCityComponent } from './restaurant/view-restaurant-by-city/view-restaurant-by-city.component';
import { ViewRestaurantByItemComponent } from './restaurant/view-restaurant-by-item/view-restaurant-by-item.component';
import { UserViewAllRestaurantsComponent } from './user-restaurant/user-view-all-restaurants/user-view-all-restaurants.component';
import { UserViewRestaurantByIdComponent } from './user-restaurant/user-view-restaurant-by-id/user-view-restaurant-by-id.component';
import { UserViewRestaurantByNameComponent } from './user-restaurant/user-view-restaurant-by-name/user-view-restaurant-by-name.component';
import { UserViewRestaurantByPincodeComponent } from './user-restaurant/user-view-restaurant-by-pincode/user-view-restaurant-by-pincode.component';
import { UserViewRestaurantByCityComponent } from './user-restaurant/user-view-restaurant-by-city/user-view-restaurant-by-city.component';
import { UserViewRestaurantByItemComponent } from './user-restaurant/user-view-restaurant-by-item/user-view-restaurant-by-item.component';
import { UserViewRestaurantComponent } from './user-restaurant/user-view-restaurant/user-view-restaurant.component';
import { UserViewRestaurantItemsComponent } from './user-restaurant/user-view-restaurant-items/user-view-restaurant-items.component';
import { AddRestaurantAddressComponent } from './restaurant/add-restaurant-address/add-restaurant-address.component';
import { UpdateRestaurantAddressComponent } from './restaurant/update-restaurant-address/update-restaurant-address.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant/add-restaurant.component';
import { ViewAllItemsComponent } from './item/view-all-items/view-all-items.component';
import { ViewAllRestaurantsComponent } from './restaurant/view-all-restaurants/view-all-restaurants.component';
import { ViewRestaurantItemsComponent } from './restaurant/view-restaurant-items/view-restaurant-items.component';
import {AddOrderComponent} from './orders/add-order/add-order.component';
import { UpdateOrderComponent } from './orders/update-order/update-order.component';
import { ViewAllOrdersComponent } from './orders/view-all-orders/view-all-orders.component';
import { ViewOrderByIdComponent } from './orders/view-order-by-id/view-order-by-id.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { AddCustomerAddressComponent } from './customers/add-customer-address/add-customer-address.component';
import { UpdateCustomerAddressComponent } from './customers/update-customer-address/update-customer-address.component';
import { CustomerService } from './customers/customer.service';
import { CartComponent } from './cart/cart.component';
import { RestaurantDetailsComponent } from '../../../OnlineFoodDelivery/src/app/user-order/restaurant-details/restaurant-details.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, LoginComponent, AdminComponent, UserComponent, RegisterComponent, ViewItemsByRestaurantComponent,
    UserViewAllItemsComponent,UserViewItemComponent,UserViewItemByIdComponent,UserViewItemByNameComponent,UserViewItemByCategoryComponent, 
    UserViewItemsByRestaurantComponent, ViewRestaurantComponent,ViewRestaurantByNameComponent,ViewAllItemsComponent,
    ViewRestaurantByPincodeComponent,ViewRestaurantByCityComponent,ViewRestaurantByItemComponent,AddRestaurantComponent,
    UserViewAllRestaurantsComponent,UserViewRestaurantByIdComponent,UserViewRestaurantByNameComponent,UserViewRestaurantByPincodeComponent
    ,UserViewRestaurantByCityComponent,UserViewRestaurantByItemComponent,UserViewRestaurantComponent,ViewAllRestaurantsComponent,
    UserViewRestaurantItemsComponent, AddRestaurantAddressComponent,  UpdateRestaurantAddressComponent,ViewRestaurantItemsComponent,
    AddOrderComponent,UpdateOrderComponent,ViewAllOrdersComponent,ViewOrderByIdComponent,AddCustomerComponent,CustomerListComponent,
    EditCustomerComponent, AddCustomerAddressComponent, UpdateCustomerAddressComponent, CartComponent,RestaurantDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule, 
    RestaurantModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    UserRoutingModule,
    UserItemModule,
    UserRestaurantModule,
    Ng2SearchPipeModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
