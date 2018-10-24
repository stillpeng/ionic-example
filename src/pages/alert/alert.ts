import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController,
              private alertCtrl:AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert():void{
    this.alertCtrl.create({
      title:'我是title',
      message:'我是alert基本提示信息',
      buttons:[
        'OK'
      ]
    }).present();
  }
  confirmAlert():void{
    this.alertCtrl.create({
      title:'提示框',
      message:'是否确认删除?',
      buttons:[
        {
          text:'确认',
          handler:()=>{
            console.log('OK');
          }
        },
        {
          text:'取消',
          handler:()=>{
            console.log('cancel');
          }
        }
      ]
    }).present();
  }
}
