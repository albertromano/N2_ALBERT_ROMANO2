import { AlbumPage } from './../album/album';
import { PhotoPage } from './../photo/photo';
import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  userPage = UserPage;
  ap = AlbumPage;
  photoPage = PhotoPage;


  constructor(public navCtrl: NavController) {

  }

}
