import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ClientComponent } from './client-component/client-component.component';
import { ProductComponent } from './product-component/product-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'client', component: ClientComponent, title: 'Client'},
    { path: 'product', component: ProductComponent, title: 'Product'}
];
