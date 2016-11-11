import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorhandlerComponent } from './errorhandler/errorhandler.component';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    CartComponent,
    CheckoutComponent,
    ErrorhandlerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
