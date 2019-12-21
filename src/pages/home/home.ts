import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../cateogry/category';

@Component({
  selector: 'page-home',
  templateUrl: 'Home.html'
})
export class HomePage {
  cateogries: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getcategories();
  }
  getcategories() {
    this.restProvider.getcategories()
      .then(data => {
        this.cateogries = data;
      });
    }
  // go to category
  openCategory(category:any) {
      this.navCtrl.push(CategoryPage, {
        category: category
      });
  }
}
