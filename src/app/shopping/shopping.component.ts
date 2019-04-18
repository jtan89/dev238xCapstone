import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  // rubric80
  // Used jQuery or Angular for data binding 
  public allProducts = [];
  public selectedCategory;
  public currentSubCategories;
  public currentSubProducts;
  public currentSubName;
  public showGrid = true;
  public showInStockOnly = false;
  public order;
  public displayStaticAlert = false;

  constructor(private productsService: ProductsService, private cartService: CartService, private orderPipe: OrderPipe) {}

  ngOnInit() {
    // retrieves product data to store into allProducts array.
    // if product data has already been loaded once, retrieve cacheProducData array and bind it to allProducts array.
    if (this.productsService.hasData()) {
      this.allProducts = this.productsService.cachedProductData;
    } else {
      this.productsService.getData()
      .subscribe((data) => {
        this.allProducts = data;
        this.productsService.cachedProductData = data;
      });
    }
  }

  // rubric27
  // Clicking on a subcategory should change the name of the selected
  // category in the controls bar
  selectCategory(index, productCategory) {
    // pass index and category data to set category states from click event.
    this.selectedCategory = productCategory;
    this.currentSubCategories = this.allProducts[index].subcategories;
    this.showGrid = false;
  }

  // rubric26
  // Clicking on a subcategory should repopulate the grid of products
  // with items from the subcategory that was just clicked. 
  setSubCategory(index, currentSubProducts) {
    this.currentSubProducts = currentSubProducts[index].items;
    this.currentSubName = currentSubProducts[index].name;
    this.showGrid = true;
  }

  // rubric31
  // If the user clicks on a product image within a grid cell, they should
  // be taken to a product page that is populated with the details of
  // the clicked product
  // rubric32
  // If the user clicks on a product name within a grid cell, they should
  // be taken to a product page that is populated with the details of
  // the clicked product
  getShowcaseProduct(product) {
    // This method sends retrieves product data from click event
    this.productsService.setShowcaseProduct(product);
  }

  // rubric29
  // If the “In Stock Only” toggle is checked, only items that are in
  // stock should be shown in the products grid. 
  toggleInStock() {
    this.showInStockOnly = !this.showInStockOnly;
  }

  // sets the sort order type of items
  setSorting(value) {
    this.order = value;
    // console.log(this.orderPipe.transform(this.currentSubProducts.items, this.order));
  }

  // adds the product to the shopping cart
  // rubric30
  // Clicking on the “Add” button inside a grid cell should add 1 unit of
  // the associated product to the shopping cart
  addToCart(product) {

    // checks if the product is already in the shopping cart.
    if (this.cartService.checkIfProductInCart(product)) {
      // generates quantity values.
      this.cartService.incrementQuantity(product);
      this.displayStaticAlert = true;
      setTimeout(() => this.displayStaticAlert = false, 3000);
    } else {
      // if product not already in shopping cart then add product to shopping cart and add to quantity.
      this.cartService.addProduct(product);
      // generates quantity values.
      this.cartService.incrementQuantity(product);
      this.displayStaticAlert = true;
      setTimeout(() => this.displayStaticAlert = false, 3000);
    }
    this.cartService.calculateProductPrice(product);
  }
}
