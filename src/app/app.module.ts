import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenClothesComponent } from './pages/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './pages/women-clothes/women-clothes.component';
import { ChildrenClothesComponent } from './pages/children-clothes/children-clothes.component';
import { BasketComponent } from './pages/basket/basket.component';
import { LikedComponent } from './pages/liked/liked.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { GreetBlockComponent } from './pages/home/greet-block/greet-block.component';
import { EmbellishedBlockComponent } from './pages/home/embellished-block/embellished-block.component';
import { DonatellaRevBlockComponent } from './pages/home/donatella-rev-block/donatella-rev-block.component';
import { IntoTrendsBlockComponent } from './pages/home/into-trends-block/into-trends-block.component';
import { ContactBlockComponent } from './pages/home/contact-block/contact-block.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe'; 

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from './product-card/product-card.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminProductsComponent } from './admin-component/admin-products/admin-products.component';
import { PopUpComponent } from './pages/pop-up/pop-up.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CompleteOrderAlertComponent } from './pages/complete-order-alert/complete-order-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenClothesComponent,
    WomenClothesComponent,
    ChildrenClothesComponent,
    BasketComponent,
    LikedComponent,
    ProductDetailsComponent,
    GreetBlockComponent,
    EmbellishedBlockComponent,
    DonatellaRevBlockComponent,
    IntoTrendsBlockComponent,
    ContactBlockComponent,
    HomeComponent,
    ProductCardComponent,
    AdminComponentComponent,
    AdminProductsComponent,
    PopUpComponent,
    AuthComponent,
    CompleteOrderAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
