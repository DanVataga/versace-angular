import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interfaces';
import { BasketService } from 'src/app/shared/services/basket.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  view: IProduct;

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
    private location: Location,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getData();
    window.scrollTo(0,0)
  }

  addActive(event): void {
    let size = event.target.innerHTML;

    event.target.classList.toggle('active')
    // console.log(event.target);
    
    
    
  }

  addToBasket(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
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
