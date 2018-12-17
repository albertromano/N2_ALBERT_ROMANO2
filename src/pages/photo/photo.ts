import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  photos: any;

  getPhotos() {
    this.restProvider.getPhotos()
    .then(data => {
      this.photos = data;
      console.log(this.photos);
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getPhotos();
  }


}
