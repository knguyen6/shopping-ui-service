import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

//customer info:
  public firstName : string;
  public lastName : string;
  public address : string;
  public zipCode : string;
  public state : string;
  public phoneNumber : string;
  public email : string;

  //payment info:
  public cardNumber : string;
  public expiration : string;
  public securityCode : string;
  public fullName : string;

  constructor(private service : AppService) { }

  ngOnInit() {
      this.getCustomerInfo();
      this.getPaymentInfo();

  }

  //place order button click handler
  public sendDataToConfirmation (){
      console.log("Place order button clicked")
      //get data from cart.

      //send to service to post
  }

  private getCustomerInfo(){
    this.service.getCustomerInfo()
      .subscribe((response )=>{
        //   console.log(response)
          const info = response.customer_info
          this.firstName = info.FirstName
          this.lastName = info.LastName
          this.address = info.Address;
          this.zipCode = info.Zipcode;
          this.state = info.State;
          this.phoneNumber = info.Phone;
          this.email = info.Email;
      }, (err) => {
          console.log("error getting customer info");
      });
  }


  private getPaymentInfo(){
    this.service.getPaymentInfo()
      .subscribe((response )=>{
        //   console.log(response)
          const info = response.payment_info
          this.cardNumber = info.CardNumber;
          this.expiration = info.Exp;
          this.fullName = info.FullName;
          this.securityCode = info.SecurityCode
      }, (err) => {
          console.log("error getting payment info");
      });
  }

}
