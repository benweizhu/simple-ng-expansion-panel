import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private expandAll: boolean;

  toggleAll() {
    this.expandAll = !this.expandAll;
  }
}
