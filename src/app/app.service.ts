import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { COMPOSITION_API } from './app.globals';

@Injectable()
export class AppService {

  public selectedProducts: Array<any> = [];

  constructor(@Inject(Http) public http: Http) {}

  public getProducts(limit: number) {
    return this.http
      .get(`${COMPOSITION_API}/products`)
      .map((response: Response) => { return JSON.parse(response['_body']); })
      .catch(error => Observable.throw(error));
  }

  public addToCart(selectedProducts) {
    this.selectedProducts = selectedProducts;
  }
}
