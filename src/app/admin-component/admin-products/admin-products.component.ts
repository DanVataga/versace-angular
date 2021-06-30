import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Product } from 'src/app/shared/classes/product.models';
import { IProduct } from 'src/app/shared/interfaces/product.interfaces';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  selectedOption: string = '';
  categoryOptions: Array<any> = [
    { name: 'Women-clothes', value: 1 },
    { name: 'Men-clothes', value: 2 },
    { name: 'Children-clothes', value: 3 },
  ];

  productName: string = '';
  productPrice: number = NaN;
  productDescription: string = '';
  productCategoryId: number = 1;
  productCategoryName: string = 'men-clothing';
  productId: number = 0;
  productImage: string;
  productSize: number;

  adminProducts: Array<IProduct> = [];

  visibleAddBtnBlock: boolean = true;
  visibleSaveBtnBlock: boolean = false;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private prService: ProductService,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public upload(event: any): void {
    const file = event.target.files[0];

    const filePath = `images/${this.createUUID()}.${file.type.split('/')[1]}`;
    console.log(filePath);

    this.task = this.afStorage.upload(filePath, file);

    this.task
      .snapshotChanges()
      .pipe(
        finalize(
          () =>
            (this.downloadURL = this.afStorage.ref(filePath).getDownloadURL())
        )
      )
      .subscribe();
    this.task.then((e) => {
      this.afStorage
        .ref(`images/${e.metadata.name}`)
        .getDownloadURL()
        .subscribe((data) => {
          this.productImage = data;
        });
    });
  }

  public createUUID(): string {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      (c) => {
        // tslint:disable-next-line:no-bitwise
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        // tslint:disable-next-line:no-bitwise
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  private getProducts(): void {
    this.prService.getJSONProducts().subscribe((data) => {
      this.adminProducts = data;
    });
  }

  addProduct(): void {
    const newP: IProduct = new Product(
      1,
      this.productCategoryId,
      this.selectedOption.toLowerCase(),
      this.productName,
      this.productDescription,
      this.productPrice,
      this.productImage,
      this.productSize
    );
    if (this.adminProducts.length > 0) {
      newP.id = this.adminProducts.slice(-1)[0].id + 1;
    }
    this.prService.postJSONProducts(newP).subscribe(() => {
      this.getProducts();
    });
    this.resetForm();
  }

  editProduct(product: IProduct): void {
    this.productName = product.name;
    this.productPrice = product.price;
    this.productDescription = product.description;
    this.selectedOption = product.categoryName.toLowerCase();
    this.productId = product.id;

    this.visibleAddBtnBlock = false;
    this.visibleSaveBtnBlock = true;
  }

  saveEditedProduct(): void {
    const updatedPr: IProduct = new Product(
      this.productId,
      this.productCategoryId,
      this.selectedOption,
      this.productName,
      this.productDescription,
      this.productPrice,
      this.productImage,
      this.productSize
    );
    this.prService.updateJSONProducts(updatedPr).subscribe(() => {
      this.getProducts();
    });

    this.visibleAddBtnBlock = true;
    this.visibleSaveBtnBlock = false;
    this.resetForm();
  }

  deleteProduct(product: IProduct): void {
    // this.prService.deleteJSONProducts()
    this.prService.deleteJSONProducts(product.id).subscribe(() => {
      this.getProducts();
    });
  }

  resetForm(): void {
    this.productName = '';
    this.productPrice = NaN;
    this.productDescription = '';
  }
}
