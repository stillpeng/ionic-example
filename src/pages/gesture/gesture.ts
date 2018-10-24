import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gesture',
  templateUrl: 'gesture.html',
})
export class GesturePage {
  count1:number = 0;
  count2:number = 0;
  count3:number = 0;
  count4:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturePage');
  }

  tapEvent(){
    this.count1++;
  }
  pressEvent(){
    this.count2++;
  }
  panEvent(){
    this.count3++;
  }
  swipeEvent(){
    this.count4++;
  }
}
