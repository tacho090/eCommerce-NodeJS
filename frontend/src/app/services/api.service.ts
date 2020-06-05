import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url);
  }

  getSecret(): string {
    let url = 'http://localhost:3000/secret';
    let clientSecret;
    const response = fetch(url).then((res) => {
      return res.json();
    }).then((responseJson) => {
      clientSecret = responseJson.client_secret;
    });
    return clientSecret;
  }
}
