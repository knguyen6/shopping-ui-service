import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppService } from './app.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { APPLICATION_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APPLICATION_ROUTES
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
