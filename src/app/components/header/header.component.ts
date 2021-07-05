import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IBasketProd } from 'src/app/shared/interfaces/basket.interfaces';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() fromHeader = new EventEmitter<boolean>();

  dropdownContentVisible: boolean = false;
  showSideMenu: boolean;
  valueFromHeader: boolean;

  authTitle: string = 'Authentication';
  wishlistTitle: string = 'Wishlist';
  basketTitle: string = 'Basket';
  serviceCategory: string;

  constructor(
    private router: Router,
    private location: Location,
  ) {}

  ngOnInit(): void {
  }

  showDropdownMenu(): void {
    this.dropdownContentVisible = !this.dropdownContentVisible;
  }

  showBackdrop() {
    this.valueFromHeader = this.showSideMenu;
    this.fromHeader.emit(this.valueFromHeader);
  }

  show(servId: string): void {
    this.serviceCategory = servId;

    this.showSideMenu = !this.showSideMenu;
    if (this.showSideMenu == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      this.location.back();
    }
  }
}
