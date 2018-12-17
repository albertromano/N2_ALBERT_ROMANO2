import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-Album',
  templateUrl: 'Album.html',
})
export class AlbumPage {

  albums: any;

  getAlbums() {
    this.restProvider.getAlbums()
    .then(data => {
      this.albums = data;
      console.log(this.albums);
    });
  }
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getAlbums();
  }

}
