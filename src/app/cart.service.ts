import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // rubric80
  // Used jQuery or Angular for data binding
  public productsInCart = [];

  constructor() {}

  checkIfProductInCart(product) {
    // return a boolean value whether the productsInCart array includes the target product.
    return this.productsInCart.includes(product);
  }

  // rubric44
  // Clicking the “Add” button should add the number of units
  // specified in the “Qty” input field of the selected product to the
  // shopping cart
  addProduct(product) {
    // adds selected product to the productsInCart array.
    this.productsInCart.push(product);
  }

  // rubric44
  // Clicking the “Add” button should add the number of units
  // specified in the “Qty” input field of the selected product to the
  // shopping cart
  addToQuantity(product, quantity) {
    const index = this.productsInCart.indexOf(product);

    if (this.productsInCart[index].quantity === undefined) {
      this.productsInCart[index].quantity = quantity;
    } else {
      this.productsInCart[index].quantity =
        quantity + this.productsInCart[index].quantity;
    }
  }

  // rubric55
  // The cost column in the table should update if the quantity input
  // field is changed
  incrementQuantity(product) {
    const index = this.productsInCart.indexOf(product);

    if (this.productsInCart[index].quantity === undefined) {
      this.productsInCart[index].quantity = 1;
    } else {
      this.productsInCart[index].quantity++;
    }
  }

  // rubric55
  // The cost column in the table should update if the quantity input
  // field is changed
  decrementQuantity(product) {
    const index = this.productsInCart.indexOf(product);

    if (this.productsInCart[index].quantity === 1) {
      this.productsInCart[index].quantity = 1;
    } else {
      this.productsInCart[index].quantity--;
    }
  }

  // rubric54
  // The remove button should remove an item from the shopping
  // cart
  deleteProduct(index) {
    // removes the product element from products in productsInCart Array at the passed index.
    delete this.productsInCart[index].quantity;
    this.productsInCart.splice(index, 1);
  }

  // rubric47
  // The user should a table displaying the product image, name, unit
  // price, quantity as an input field, total cost, and a remove button
  // for each product in the shopping cart.
  calculateProductPrice(product) {
    const index = this.productsInCart.indexOf(product);

    this.productsInCart[index].cartPrice = this.productsInCart[index].price * this.productsInCart[index].quantity;
  }
}
