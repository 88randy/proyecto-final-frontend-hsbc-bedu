import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptors';
import { CustomerListComponent } from './_components/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './_components/customer/customer-details/customer-details.component';
import { CustomerCreateComponent } from './_components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './_components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './_components/customer/customer-delete/customer-delete.component';
import { ForbiddenComponent } from './_components/errors/forbidden/forbidden.component';
import { ProductCreateComponent } from './_components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './_components/product/product-delete/product-delete.component';
import { ProductDetailsComponent } from './_components/product/product-details/product-details.component';
import { ProductListComponent } from './_components/product/product-list/product-list.component';
import { ProductUpdateComponent } from './_components/product/product-update/product-update.component';
import { PurchaseOrderCreateComponent } from './_components/purchase-order/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderDetailsComponent } from './_components/purchase-order/purchase-order-details/purchase-order-details.component';
import { PurchaseOrderListComponent } from './_components/purchase-order/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderUpdateComponent } from './_components/purchase-order/purchase-order-update/purchase-order-update.component';
import { PurchaseOrderDeleteComponent } from './_components/purchase-order/purchase-order-delete/purchase-order-delete.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    ForbiddenComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductUpdateComponent,
    PurchaseOrderCreateComponent,
    PurchaseOrderDetailsComponent,
    PurchaseOrderListComponent,
    PurchaseOrderUpdateComponent,
    PurchaseOrderDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
