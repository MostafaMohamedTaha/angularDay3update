// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: { name: string; price: number }[] = [];

  addProduct(product: { name: string; price: number }) {
    this.products.push(product);
  }

  deleteProduct(product: { name: string; price: number }) {
    this.products = this.products.filter((p) => p !== product);
  }
  title = 'angularDay3';

}

