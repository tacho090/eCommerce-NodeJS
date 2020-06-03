import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  message: string;
  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit(): void {
    this.getProducts();
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  getProducts() {
    this.api.getProducts().subscribe(data => {
      for (const d of (data as any)) {
        this.products.push({
          imagePath: d.imagePath,
          imageAlt: 'temporaryAlt',
          tag: 'NEW',
          name: d.name,
          description: d.description,
          price: d.price,
          publishedBy: d.publishedBy
        });
      }
    });
  }

  addToCart(index) {
    console.log(this.products[index]);
  }

}
