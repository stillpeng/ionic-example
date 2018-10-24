import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lianxi01toPage } from "../lianxi01to/lianxi01to";

/**
 * Generated class for the Lianxi01Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lianxi01',
  templateUrl: 'lianxi01.html',
})
export class Lianxi01Page {
  lianxi01toPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lianxi01toPage = Lianxi01toPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lianxi01Page');
  }

}
