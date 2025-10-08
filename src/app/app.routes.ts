import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/common/not-found/not-found';
import { Products } from './components/products/products';
import { ProductSingleComponent } from './components/products/product-single/product-single.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: Products,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductSingleComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
