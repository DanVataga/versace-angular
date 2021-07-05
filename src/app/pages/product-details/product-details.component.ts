import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketProd } from 'src/app/shared/classes/basket.models';
import { IBasketProd } from 'src/app/shared/interfaces/basket.interfaces';
import { IProduct } from 'src/app/shared/interfaces/product.interfaces';
import { BasketService } from 'src/app/shared/services/basket.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  view: IProduct;

  basketArr: Array<IBasketProd> = [];
  wishlistArr: Array<IBasketProd> = [];


  categoryName: string;
  slectedSize: number = 37;

  inactive: boolean = true;
  active: boolean = false;
  isActive: boolean = true;

  // sizeList: Array<number> = [37, 38, 39, 40, 41, 42, 43, 44];
  sizeList: Array<any> = [
    { id: 1, size: 37 },
    { id: 2, size: 38 },
    { id: 3, size: 39 },
    { id: 4, size: 40 },
    { id: 5, size: 41 },
    { id: 6, size: 42 },
    { id: 7, size: 43 },
    { id: 8, size: 44 },
  ];

  // id: number = 0;

  constructor(
    private prService: ProductService,
    private route: ActivatedRoute,
    private Router: Router,
    private location: Location,
    private basketService: BasketService,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getBasketProducts();
    window.scrollTo(0, 0);
  }

  private getBasketProducts(): void {
    this.basketService.getJSONProducts().subscribe((data) => {
      this.basketArr = data;
    });
  }

  private getWishlistProducts(): void {
    this.wishlistService.getJSONProducts().subscribe((data) => {
      this.wishlistArr = data;
    });
  }

  addActive(event): void {
    let clickedElement = event.target;
    this.slectedSize = event.target.innerHTML;
    
    if( clickedElement.nodeName === "LI" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");

      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
  }

  addToBasket(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const slash = this.Router.url.substring(9).indexOf('/');

    this.categoryName = this.Router.url.substr(9, slash);

    const newBasketProd: IBasketProd = new BasketProd(
      id,
      this.categoryName,
      this.view.name,
      this.view.price,
      this.view.image,
      this.slectedSize
    );

    this.basketService.postJSONProducts(newBasketProd).subscribe();
    this.getBasketProducts();
  }

  addToWishlist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const slash = this.Router.url.substring(9).indexOf('/');

    this.categoryName = this.Router.url.substr(9, slash);

    const newWishlistProd: IBasketProd = new BasketProd(
      id,
      this.categoryName,
      this.view.name,
      this.view.price,
      this.view.image,
      this.slectedSize
    );

    this.wishlistService.postJSONProducts(newWishlistProd).subscribe();
    this.getWishlistProducts();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    // parseInt(id)
    // this.prService.getOneProduct(id).subscribe(data => {
    //   this.view = data
    // }})
    this.prService.getOneProduct(id).subscribe((data) => {
      this.view = data;
    });
  }

  back(): void {
    this.location.back();
  }
}
