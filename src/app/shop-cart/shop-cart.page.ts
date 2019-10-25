import { Component, OnInit } from '@angular/core';
import { ProductI } from '../models/product.interface';
import { ShopCartService } from '../services/shop-cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.page.html',
  styleUrls: ['./shop-cart.page.scss'],
})
export class ShopCartPage implements OnInit {
  all: ProductI[];
  constructor(private shopCartServicehomeService: ShopCartService) { }

  ngOnInit() {
    this.shopCartServicehomeService.getAll().subscribe(res => {
      this.all = res;
    });
  }
}
