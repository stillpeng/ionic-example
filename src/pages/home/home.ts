import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ButtonPage} from "../button/button";
import {ListPage} from "../list/list";
import {CardPage} from "../card/card";
import {GesturePage} from "../gesture/gesture";
import {Lianxi01Page} from "../lianxi01/lianxi01";
import {FabPage} from "../fab/fab";
import {GridPage} from "../grid/grid";
import {FormPage} from "../form/form";
import {ToastPage} from "../toast/toast";
import {Lianxi02Page} from "../lianxi02/lianxi02";
import {AlertPage} from "../alert/alert";
import {IconPage} from "../icon/icon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //定义属性
  buttonPage;
  listPage;
  cardPage;
  gesturePage;
  lianxi01Page;
  fabPage;
  gridPage;
  formPage;
  toastPage;
  lianxi02Page;
  alertPage;
  iconPage;

  constructor(public navCtrl: NavController) {
    //实例化
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.cardPage = CardPage;
    this.gesturePage = GesturePage;
    this.lianxi01Page = Lianxi01Page;
    this.fabPage = FabPage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
    this.lianxi02Page = Lianxi02Page;
    this.alertPage = AlertPage;
    this.iconPage = IconPage;
  }

  toLazyPage():void{
    this.navCtrl.push('LazyPage');
  }

  toSearchPage():void{
    this.navCtrl.push('SearchPage');
  }
}
