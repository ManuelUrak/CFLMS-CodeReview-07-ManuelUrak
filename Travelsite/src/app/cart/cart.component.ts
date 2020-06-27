import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  fullPrice;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) 
  {
  	this.checkoutForm = this.formBuilder.group(
  	{
  		name: "",
  		address: ""
  	});
  }

  ngOnInit(): void {
  	this.items = this.cartService.getItems();
    this.fullPrice = this.cartService.calculateSum();
  }

  onSubmit(costumerData)
  {
  	swal(
        {
          text: "Your submission has been purchased.",
          icon: "success"
        }
      )

  	this.items = this.cartService.clearCart();
  	this.checkoutForm.reset();
    this.fullPrice = this.cartService.calculateSum();
  }


}
