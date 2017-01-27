import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-refill',
  templateUrl: 'refill.html'
})
export class RefillPage {
    pharmacy;
    barcode: any;
    constructor(public navCtrl: NavController,
                public http: Http) {

    }
    
    scanBarcode() {
        this.riteAidFindStores(11238);
        BarcodeScanner.scan().then((barcodeData) => {
            this.barcode = barcodeData;
        }, (err) => {
            console.log(err);
        });
    }
    
    riteAidFindStores(zipcode) {
        let url = 'https://www.riteaid.com/store-locator?searchByStoreNumberOnly=N&searchString=' + zipcode;
        this.http.get(url)
                 .subscribe((data) => {
                     this.parseHTML(data);
                     let overview = document.querySelectorAll('div.overview')[0];
                     let stores = overview.querySelectorAll('div.map1');
                     for (let i = 0; i < stores.length; i++) {
                         console.log(stores[i].querySelector('span.store-miles'));
                     }
                 })
    }
    
    parseHTML(htmlText) {
        let parser = new DOMParser();
        return parser.parseFromString(htmlText, 'text/html');
    }
    
    popCurrent() {
        this.navCtrl.pop();
    }
}
