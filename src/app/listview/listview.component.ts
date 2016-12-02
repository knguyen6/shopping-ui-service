import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
  providers: [AppService]
})
export class ListviewComponent implements OnInit {

  private static DEFAULT_LIMIT: number = 20;

  public products: Array<any>;

  public error: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service
      .getProducts(ListviewComponent.DEFAULT_LIMIT)
      .subscribe((response) => {
        console.log(response);
        this.products = response;
      }, (error) => {
        console.log(error);
        this.error = error;
      });
  }

}
