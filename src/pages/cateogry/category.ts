import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

@Component({
  selector: 'category-ionic',
  templateUrl: 'category.html'
})
export class CategoryPage {
  category: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');
  }
  // open product
  openProduct(product:any) {
    this.navCtrl.push(ProductPage, {
      product: product
    });
}
}
