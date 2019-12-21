import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
  constructor(public http: HttpClient) {
  }
  getcategories() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
      });
    });
  }
}
