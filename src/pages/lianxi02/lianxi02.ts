import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the Lianxi02Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lianxi02',
  templateUrl: 'lianxi02.html',
})
export class Lianxi02Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl:ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lianxi02Page');
  }

  handleTap():void{
    this.toastCtrl.create({
      message:'用户名或密码错误',
      duration:2000
    }).present();
  }
}
