import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { createDecipher } from 'crypto';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  clientSecret: string;
  stripe = Stripe('pk_test_51Gq6xdIPCOadEjnwAHYGcx4WzIsTVbdhGxS732lQ1ftaTMpDTO89CDDMr4kxUVeRCwqWINhQGKD7e62kIxkEg4x100zQkd84Sp');
  elements = this.stripe.elements();
  style = {
    base: {
      color: "#32325d"
    }
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.clientSecret = this.api.getSecret();
    const card = this.elements.create('card', { style: this.style});
    card.mount('#card-element');
    card.on('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });
  }

  submit(): void {
      this.stripe.confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: '121212',
          billing_details: {
            name: 'Jenny Rosen'
          }
        }
      }).then((result) => {
        if (result.error) {
          console.log(result.error.message);
        } else {
          if (result.paymentIntent.status == 'succeeded') {
            console.log('Succesful payment');
          }
        }
      });
  }

}
