import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interfaces';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-children-clothes',
  templateUrl: './children-clothes.component.html',
  styleUrls: ['./children-clothes.component.scss'],
})
export class ChildrenClothesComponent implements OnInit {
  products: Array<IProduct> = [];
  takenUrl: string;

  constructor(
    private prService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getProducts();

      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.takenUrl = this.route.url.substr(9,16);

  }

  private getProducts(): void {
    // const category = this.activatedRoute.snapshot.paramMap.get('category');

    this.prService.getJSONProducts().subscribe((data) => {
      this.products = data.filter((pr) => pr.categoryName === this.takenUrl);
    });
  }
}
