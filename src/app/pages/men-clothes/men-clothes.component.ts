import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from '../../shared/interfaces/product.interfaces';

@Component({
  selector: 'app-men-clothes',
  templateUrl: './men-clothes.component.html',
  styleUrls: ['./men-clothes.component.scss'],
})
export class MenClothesComponent implements OnInit {
  products: Array<IProduct> = [];
  takenUrl: string;
  takenCategory: string;
  clearTakenUrl: string;
  urlIndex: number;

  constructor(
    private prService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getProducts();
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.takenUrl = this.router.url.substr(9, 11);


    // this.urlIndex = this.router.url.indexOf('(popUp:pop-up/basket)');
    // this.clearTakenUrl = this.router.url.substr(this.urlIndex);
    // console.log(this.clearTakenUrl);

    // this.router.navigateByUrl(`${this.clearTakenUrl}`, {skipLocationChange: true});
  }

  private getProducts(): void {
    // const category = this.activatedRoute.snapshot.paramMap.get('category');

    this.prService.getJSONProducts().subscribe((data) => {
      this.products = data.filter((pr) => pr.categoryName === this.takenUrl);
    });
  }
}
