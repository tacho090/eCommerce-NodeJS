import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
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

}
