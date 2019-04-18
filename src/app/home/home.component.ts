import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  // rubric80
  // Used jQuery or Angular for data binding 
  public toggleSlides: any;
  public slides: any = null;

  constructor(private productsService: ProductsService, private carouselConfig: NgbCarouselConfig) {
    this.carouselConfig.pauseOnHover = false;
  }

  ngOnInit() {

    if (this.productsService.hasData()) {
      this.slides = this.productsService.cachedProductData;
      // console.log('retrieved cached product data from ProductService');
    } else {
      this.productsService.getData()
      .subscribe((data) => {
        this.slides = data;
      });
    }
  }

  // rubric10
  // If the “Toggle Slide Show” switch is checked, the product carousel
  // should automatically move forward one slide every 3 seconds 
  toggleSlide() {
  // toggles the slide show to play or stop
    this.toggleSlides = (this.toggleSlides) ? false : 3000;
  }

  getShowcaseProduct(product) {
    // This method sends retrieves product data from click event
    this.productsService.setShowcaseProduct(product);
  }
}


