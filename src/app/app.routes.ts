import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'product', component: ProductComponent, title: 'Product'},
    { path: 'product/register', component: ProductRegisterComponent, title: ' Product Register'},
    { path: 'product/list', component: ProductListComponent, title: 'Product List'}
];
