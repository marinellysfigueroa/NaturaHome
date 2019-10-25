import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'shop-cart', loadChildren: './shop-cart/shop-cart.module#ShopCartPageModule' },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
