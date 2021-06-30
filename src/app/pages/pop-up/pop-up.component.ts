import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Input() openSideMenu: boolean;

  takenUrl: string;
  urlIndex: number;

  constructor() {}

  ngOnInit(): void {}
}
