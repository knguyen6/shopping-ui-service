// Route Configuration
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ListviewComponent} from "./listview/listview.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListviewComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

export const APPLICATION_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
