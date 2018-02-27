import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VgapiProvider } from '../../providers/vgapi/vgapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  playerSummary: any;
  serverloc = 'sg';
  ignName = 'santadoge';

  constructor(public navCtrl: NavController, private vgapiProvider:VgapiProvider) {

  }

  ionViewWillEnter(){
    this.vgapiProvider.getPlayerSummary(this.serverloc, this.ignName)
      .subscribe(playerSummary => {
        console.log(playerSummary.data[0].attributes.name);
        this.playerSummary = playerSummary.data[0];
      });
  }

}
