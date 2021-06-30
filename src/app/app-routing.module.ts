import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenClothesComponent } from './pages/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './pages/women-clothes/women-clothes.component';
import { ChildrenClothesComponent } from './pages/children-clothes/children-clothes.component';
import { BasketComponent } from './pages/basket/basket.component';
import { LikedComponent } from './pages/liked/liked.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminProductsComponent } from './admin-component/admin-products/admin-products.component';
import { PopUpComponent } from './pages/pop-up/pop-up.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CompleteOrderAlertComponent } from './pages/complete-order-alert/complete-order-alert.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // {
  //   outlet: 'popUp',
  //   path: 'pop-up',
  //   component: PopUpComponent,
  //   // children: [{ outlet: 'popUp', path: 'pop-up/basket', component: BasketComponent }],
  // },
  { outlet: 'popUp', path: 'basket', component: BasketComponent },
  { outlet: 'popUp', path: 'wishlist', component: LikedComponent },
  { outlet: 'popUp', path: 'auth', component: AuthComponent },
  { outlet: 'popUp', path: 'basket/complete-order', component: CompleteOrderAlertComponent},
  // { outlet: 'popUp', path: 'pop-up/auth', component: AuthComponent },

  { path: 'clothes/men-clothes', component: MenClothesComponent },
  { path: 'clothes/women-clothes', component: WomenClothesComponent },
  { path: 'clothes/children-clothes', component: ChildrenClothesComponent },
  { path: 'clothes/:category/:id', component: ProductDetailsComponent },
  {
    path: 'admin',
    component: AdminComponentComponent,
    children: [
      { path: '', redirectTo: 'admin-products', pathMatch: 'full' },
      { path: 'admin-products', component: AdminProductsComponent },
    ],
  },
  // { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
