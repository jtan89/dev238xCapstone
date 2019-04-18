import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  // This product service is to provide data to the components that require them.
  // rubric80
  // Used jQuery or Angular for data binding
  // rubric81
  // Data was accessed using the Azure Web API and not a local file
  private dataURL = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';
  public cachedProductData;

  public showcaseProduct;


  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    // This method serves to return an observable which contains all product information
    // The observable returned is of the interface type.
    return this.http.get<IProduct[]>(this.dataURL);
  }

  hasData() {
    // check for if data has already been stored in globalProductData.
    return (this.cachedProductData && this.cachedProductData.length);
  }

  setShowcaseProduct(product) {
    // This method receives a product which is set to ProductsService showcaseProduct
    // The showcaseProduct details fill Product Page
    this.showcaseProduct = product;
  }
}
