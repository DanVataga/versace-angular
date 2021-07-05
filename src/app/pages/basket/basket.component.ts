import { Component, OnInit } from '@angular/core';
import { IBasketProd } from 'src/app/shared/interfaces/basket.interfaces';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basketArr: Array<IBasketProd>;
  pricesArr: Array<number> = [];

  summaryPrice: number = 0;

  data;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasketProducts();
  }


  private getBasketProducts(): void {
    this.basketService.getJSONProducts().subscribe((data) => {
      this.basketArr = data;

      this.data = data;


      // data.forEach((p) => {
        // this.pricesArr.push(p.price);
        // console.log(this.pricesArr);
        // const reducer = (accum, currentVal) => accum + currentVal;
        // this.summaryPrice = this.pricesArr.reduce(reducer);
        // console.log(this.summaryPrice);

      // });
    });
  }

  deleteProd(prod: IBasketProd): void {
    this.basketService.deleteJSONProducts(prod.id).subscribe(() => {
      this.getBasketProducts();
    });
  }
}
