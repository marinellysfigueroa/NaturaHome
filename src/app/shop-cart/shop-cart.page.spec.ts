import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartPage } from './shop-cart.page';

describe('ShopCartPage', () => {
  let component: ShopCartPage;
  let fixture: ComponentFixture<ShopCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
