import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-order-alert',
  templateUrl: './complete-order-alert.component.html',
  styleUrls: ['./complete-order-alert.component.scss']
})
export class CompleteOrderAlertComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }

}
