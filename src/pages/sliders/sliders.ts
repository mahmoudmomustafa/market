import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-sliders',
  templateUrl: 'sliders.html'
})
export class SliderPage {
  slides = [
    {
      title: "Lorem Ipsum!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "../../assets/imgs/slider.jpg",
    },
    {
      title: "Lorem Ipsum?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: "../../assets/imgs/slider.jpg",
    }
  ];
  constructor(public navCtrl: NavController, ) {

  }
  toHome(){
    this.navCtrl.setRoot(HomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
}