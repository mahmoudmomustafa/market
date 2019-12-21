import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  product: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('product');
  }
}
