import { Component, OnInit } from '@angular/core';
import { ProductI } from '../models/product.interface';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  all: ProductI[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAll().subscribe(res => {
      this.all = res;
    });
  }
}
