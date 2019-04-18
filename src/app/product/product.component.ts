import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // rubric80
  // Used jQuery or Angular for data binding 
  public product;
  public userQuantity;
  public quantityWarning = false;
  public displayStaticAlert = false;

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.product = this.productService.showcaseProduct;
  }

  // rubric44
  // Clicking the “Add” button should add the number of units
  // specified in the “Qty” input field of the selected product to the
  // shopping cart

  submitToCart(product) {
    // tslint:disable-next-line:triple-equals
    if ((this.userQuantity < product.stock || this.userQuantity == product.stock) && (this.userQuantity > 0)) {
      this.quantityWarning = false;
       // checks if the product is already in the shopping cart.
      if (this.cartService.checkIfProductInCart(product)) {
      // generates quantity values.
        this.cartService.addToQuantity(product, this.userQuantity);
        this.displayStaticAlert = true;
        setTimeout(() => this.displayStaticAlert = false, 3000);
      } else {
      // if product not already in shopping cart then add product to shopping cart and add to quantity.
        this.cartService.addProduct(product);
        this.cartService.addToQuantity(product, this.userQuantity);
      // generates quantity values.
        this.displayStaticAlert = true;
        setTimeout(() => this.displayStaticAlert = false, 3000);
      }
    } else {
      this.quantityWarning = true;
    }
    this.cartService.calculateProductPrice(product);
  }

}
