import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  products: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.products = this.service.selectedProducts;
  }

}
