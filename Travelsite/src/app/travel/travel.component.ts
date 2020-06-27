import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  products = products;

  constructor(private cartService: CartService) { }

  addToCart(product)
  {
  	swal(
  			{
  				text: "Your product has been added to the cart!",
  				icon: "success",
  			}
  		);
  	this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
