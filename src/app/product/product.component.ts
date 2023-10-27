import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //#region  params

  name = '';
  price = 0;
  @Output() 
  newProductToAdd = new EventEmitter<{ name: string; price: number }>();
  //#endregion
  
  //#region  valid [name,price]

  isValidName(){
    return this.name != '' && this.name.length > 3
  }

  get isValidPrice(){
    return this.price >=100 && this.price<=2000
  }
  //#endregion

  //#region  create new product function

  addProduct() {
    this.name = '';
    this.price = 0;
    this.newProductToAdd.emit({ name: this.name, price: this.price });
  }
  //#endregion
}
