import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {
    private bubbles: any[] = [
        {
            src: 'b1.png',
        },
        {
            src: 'b2.png',
        },
        {
            src: 'b3.png',
            page: NewsPage
        },
        {
            src: 'b4.png',
        },
        {
            src: 'b5.png',
        },
        {
            src: 'b6.png',
        }
    ]

    constructor(public navCtrl: NavController) {

    }
    
    gotoPage(page) {
        this.navCtrl.push(page);
    }
}
