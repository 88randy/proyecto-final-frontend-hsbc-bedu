import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CustomerListComponent } from './_components/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './_components/customer/customer-details/customer-details.component';
import { CustomerCreateComponent } from './_components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './_components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './_components/customer/customer-delete/customer-delete.component';
import { ForbiddenComponent } from './_components/errors/forbidden/forbidden.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminAndModGuard } from './guards/adminAndMod.guard';
import { AdminAndModAndUserGuard } from './guards/adminAndModAndUser.guard';
import { ProductListComponent } from './_components/product/product-list/product-list.component';
import { ProductCreateComponent } from './_components/product/product-create/product-create.component';
import { ProductDetailsComponent } from './_components/product/product-details/product-details.component';
import { ProductUpdateComponent } from './_components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './_components/product/product-delete/product-delete.component';
import { PurchaseOrderListComponent } from './_components/purchase-order/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderCreateComponent } from './_components/purchase-order/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderUpdateComponent } from './_components/purchase-order/purchase-order-update/purchase-order-update.component';
import { PurchaseOrderDetailsComponent } from './_components/purchase-order/purchase-order-details/purchase-order-details.component';
import { PurchaseOrderDeleteComponent } from './_components/purchase-order/purchase-order-delete/purchase-order-delete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'customers', component: CustomerListComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'customers/search/:id', component: CustomerDetailsComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'customers/add', component: CustomerCreateComponent, canActivate: [AdminAndModGuard] },
  { path: 'customers/update/:id', component: CustomerUpdateComponent, canActivate: [AdminAndModGuard] },
  { path: 'customers/delete/:id', component: CustomerDeleteComponent, canActivate: [AdminGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'products/search/:id', component: ProductDetailsComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'products/add', component: ProductCreateComponent, canActivate: [AdminAndModGuard] },
  { path: 'products/update/:id', component: ProductUpdateComponent, canActivate: [AdminAndModGuard] },
  { path: 'products/delete/:id', component: ProductDeleteComponent, canActivate: [AdminGuard] },
  { path: 'purchase-orders', component: PurchaseOrderListComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'purchase-orders/search/:id', component: PurchaseOrderDetailsComponent, canActivate: [AdminAndModAndUserGuard] },
  { path: 'purchase-orders/add', component: PurchaseOrderCreateComponent, canActivate: [AdminAndModGuard] },
  { path: 'purchase-orders/update/:id', component: PurchaseOrderUpdateComponent, canActivate: [AdminAndModGuard] },
  { path: 'purchase-orders/delete/:id', component: PurchaseOrderDeleteComponent, canActivate: [AdminGuard] },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
