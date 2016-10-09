import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-refill',
  templateUrl: 'refill.html'
})
export class RefillPage {
    private barcode: any;
    constructor(public navCtrl: NavController) {

    }
    
    scanBarcode() {
        BarcodeScanner.scan().then((barcodeData) => {
            this.barcode = barcodeData;
        }, (err) => {
            console.log(err);
        });
    }
}
