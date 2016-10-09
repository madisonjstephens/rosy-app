import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-refill',
  templateUrl: 'refill.html'
})
export class RefillPage {
    constructor(public navCtrl: NavController) {

    }
    
    scanBarcode() {
        BarcodeScanner.scan().then((barcodeData) => {
            console.log(barcodeData);
        }, (err) => {
            console.log(err);
        });
    }
}
