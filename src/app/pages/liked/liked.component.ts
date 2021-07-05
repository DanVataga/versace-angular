import { Component, OnInit } from '@angular/core';
import { BasketProd } from 'src/app/shared/classes/basket.models';
import { IBasketProd } from 'src/app/shared/interfaces/basket.interfaces';
import { BasketService } from 'src/app/shared/services/basket.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
})
export class LikedComponent implements OnInit {
  view: IBasketProd;
  wishlistArr: Array<IBasketProd>;

  constructor(
    private wishlistService: WishlistService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getWishlistProducts();
  }

  private getWishlistProducts(): void {
    this.wishlistService.getJSONProducts().subscribe((data) => {
      this.wishlistArr = data;
    });
  }

  addToBasket(id): void {
    const newWishlistProd: IBasketProd = new BasketProd(
      this.wishlistArr[id].id,
      this.wishlistArr[id].categoryName,
      this.wishlistArr[id].name,
      this.wishlistArr[id].price,
      this.wishlistArr[id].image,
      this.wishlistArr[id].size
    );

    this.basketService.postJSONProducts(newWishlistProd).subscribe();
  }

  deleteWishProd(id): void {
    this.wishlistService.deleteJSONProducts(this.wishlistArr[id].id).subscribe((data) => {
      this.getWishlistProducts()
    })
  }
}
