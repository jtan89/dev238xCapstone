import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // rubric80
  // Used jQuery or Angular for data binding 
  public customerCart = [];

  public subTotal;
  public taxTotal;
  public cartTotal;

  public orderSuccess;
  public orderSubmitted;

  userModel = new User('', '', '', '', '', '', null);

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.customerCart = this.cartService.productsInCart;

    if (this.customerCart.length) {
      this.calculateCartTotal();
    }
  }

  // rubric55
  // The cost column in the table should update if the quantity input
  // field is changed
  addQuantity(product) {
    this.cartService.incrementQuantity(product);
    this.cartService.calculateProductPrice(product);
    this.calculateCartTotal();
  }

  // rubric55
  // The cost column in the table should update if the quantity input
  // field is changed
  subtractQuantity(product) {
    this.cartService.decrementQuantity(product);
    this.cartService.calculateProductPrice(product);
    this.calculateCartTotal();
  }

  // rubric54
  // The remove button should remove an item from the shopping
  // cart
  removeProduct(index) {
    // removes the product by passing index of product to CartService deleteProduct method.
    this.cartService.deleteProduct(index);
    this.calculateCartTotal();

  }

  // rubric51
  // The checkout button should create an alert based on the users
  // shipping details and total cost.
  // rubric52
  // The form should show validation errors if the form isn’t filled out
  // correctly and the checkout button is pressed 
  checkOut(isValid) {
    this.orderSubmitted = true;
    if (isValid && this.customerCart.length) {
      this.orderSuccess = true;
      console.log('form is valid');
    } else {
      this.orderSuccess = false;
    }
  }
  // rubric53
  // The cost details section should update if any items are removed
  // from the shopping cart of if any of the item quantities are
  // updated
  calculateCartTotal() {
    let subTotal = 0;
    let index;

    for ( index = 0; index < this.customerCart.length; index++) {
      subTotal += this.customerCart[index].cartPrice;
    }
    this.subTotal = subTotal;
    this.taxTotal = subTotal * 0.10;
    this.cartTotal = this.subTotal + this.taxTotal + 10.00;
  }
}
