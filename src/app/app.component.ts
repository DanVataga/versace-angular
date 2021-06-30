import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'versace';

  backdrop: boolean

  showBackdrop(e: boolean): void {
    this.backdrop = e;
  }
}
