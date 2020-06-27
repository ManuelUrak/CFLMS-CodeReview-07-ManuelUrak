import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  
  constructor() { }

  addToCart(product)
  {
  	this.items.push(product);
  }

  getItems()
  {
  	return this.items;
  }

  clearCart()
  {
  	this.items = [];
  	return this.items;
  }

  calculateSum()
  {
    let calcSum: number = 0;
    for(let item of this.items)
    {
      calcSum += item.price;
    }

    return calcSum.toFixed(2);
  }

}
