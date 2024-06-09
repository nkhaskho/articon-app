import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/products/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'events/add',
    loadComponent: () => import('./pages/events/add-event/add-event.page').then( m => m.AddEventPage)
  },
  {
    path: 'workshop',
    loadComponent: () => import('./pages/workshop/workshop.page').then( m => m.WorkshopPage)
  },
  {
    path: 'products/:id/edit',
    loadComponent: () => import('./pages/products/edit-product/edit-product.page').then( m => m.EditProductPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home/home.page').then( m => m.HomePage)
  },



];
