import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  private static DEFAULT_LIMIT: number = 20;

  public products: Array<any>;

  public error: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    console.log('this.service.selectedProducts:', this.service.selectedProducts);
    this.service
      .getProducts(ListviewComponent.DEFAULT_LIMIT)
      .subscribe((response) => {
        this.products = response.map((p) => {
          let isSelected = this.service.selectedProducts.find(sp => sp.id === p.id);
          isSelected ? p.checked = true : p.checked = false;
          return p;
        });
      }, (error) => {
        console.log(error);
        this.error = error;
      });
  }

  public onCheckboxChange(event, product) {
    event.target.checked ? product.checked = true : product.checked = false;
  }

  public addToCart() {
    this.service
      .addToCart(this.products.filter((p) => {
        return p.checked;
      }));
  }

}
