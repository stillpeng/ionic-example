import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl:ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }
  //duration几秒钟消失
  basicToast():void{
    let toast = this.toastCtrl.create({
      message:'基本提示信息',
      duration:2000
    });
    toast.present();
  }

  //根据参数设置在哪个位置提示信息
  position(position:string):void{
    this.toastCtrl.create({
      message:'我在'+position+'位置显示',
      duration:2000,
      position:position
    }).present();
  }

  //可以关闭的提示
  canClose():void{
    this.toastCtrl.create({
      message:'我是可以被关闭的提示',
      showCloseButton:true,
      closeButtonText:'x'
    }).present();
  }
}
