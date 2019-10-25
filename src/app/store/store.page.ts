import { Component, OnInit } from '@angular/core';
import { ProductI} from '../models/product.interface';
import { ProductService} from '../services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  all: ProductI[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(res =>
      {
        this.all=res;
      });
  }

}
