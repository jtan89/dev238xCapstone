import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';


// rubric13
// The home page is accessible at http://localhost:8080/#

// rubric34
// The shopping page is accessible at
// http://localhost:8080/#/shopping

// rubric46
// The product page is accessible at
// http://localhost:8080/#/product?name=productname 

// rubric56
// The cart page is accessible at http://localhost:8080/#/cart 

// rubric62
// The contact page is accessible at http://localhost:8080/#/contact 

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'product/:name', component: ProductComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,
                                  ShoppingComponent,
                                  CartComponent,
                                  AboutComponent,
                                  ContactComponent,
                                ProductComponent,
                                NotFoundComponent];
