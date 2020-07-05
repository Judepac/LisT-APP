import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'categorie', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'friend', loadChildren: () => import('./friend/friend.module').then(m => m.FriendModule) },
  { path: 'addProduct', loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
