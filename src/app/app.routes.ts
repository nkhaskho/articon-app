import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'products/add',
    loadComponent: () => import('./pages/products/add-product/add-product.page').then( m => m.AddProductPage)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/products/product-details/product-details.page').then( m => m.ProductDetailsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/users/user/user.page').then( m => m.UserPage)
  },  {
    path: 'categories',
    loadComponent: () => import('./pages/products/categories/categories.page').then( m => m.CategoriesPage)
  },

];
