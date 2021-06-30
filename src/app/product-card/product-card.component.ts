import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/interfaces/product.interfaces';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // shirtCardArray: Array<IProduct> = [
  //   {
  //     image: '../../../assets/img/mens-shirts/1.png',
  //     name: 'MIXED PRINT COTTON POPLIN SHIRT',
  //     price: 925,
  //   },
  //   {
  //     image: '../../../assets/img/mens-shirts/2.png',
  //     name: 'ACANTHUS PRINT COTTON POPLIN SHIRT',
  //     price: 725,
  //   },
  //   {
  //     image: '../../../assets/img/mens-shirts/3.png',
  //     name: 'LHOMME MOTIF PRINCE OF WALES SHIRT',
  //     price: 925,
  //   },
  //   {
  //     image: '../../../assets/img/mens-shirts/4.png',
  //     name: 'MIXED PRINT SHIRT',
  //     price: 575,
  //   },
  //   {
  //     image: '../../../assets/img/mens-shirts/5.png',
  //     name: 'MEDUSA CREST EMBROIDERED SHIRT',
  //     price: 1925,
  //   },
  //   {
  //     image: '../../../assets/img/mens-shirts/6.png',
  //     name: 'BAROCCO ACANTHUS PRINT SILK SHIRT',
  //     price: 854,
  //   },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
