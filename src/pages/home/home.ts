import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VgapiProvider } from '../../providers/vgapi/vgapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  playerSummary: any;
  serverloc = '';
  ignName = '';

  constructor(public navCtrl: NavController, private vgapiProvider:VgapiProvider) {

  }

  ionViewWillEnter(){
    
  }

  search(){
    console.log(this.serverloc);
    console.log(this.ignName);

    this.vgapiProvider.getPlayerSummary(this.serverloc, this.ignName)
      .subscribe(playerSummary => {
        console.log(playerSummary.data[0].attributes.name);
        this.playerSummary = playerSummary.data[0];
      });
      
  }

}
