import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this import every time you create a router
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products/products.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
