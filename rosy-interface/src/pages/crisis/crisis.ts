import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-crisis',
  templateUrl: 'crisis.html'
})
export class CrisisPage {
    private dropdowns: any[] = [
        {
            title: 'mood',
        },
        {
            title: 'body',
        },
        {
            title: 'skin',
        },
        {
            title: 'mind',
        },
        {
            title: 'activity',
        }
    ]

    constructor(public navCtrl: NavController) {

    }
   
    get todayDate() {
        let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        
        let today = new Date();
        let day = days[today.getDay()];
        let month = months[today.getMonth()];
        let date = today.getDate();
        return day + ', ' + month + ' ' + date + this.dateSuffix(date);
    }
    
    dateSuffix(date: number) {
        if (date == 1 || date == 21 || date == 31) {
            return 'st';
        } else if (date == 2 || date == 22) {
            return 'nd';
        } else if (date == 3 || date == 23) {
            return 'rd';
        } else {
            return 'th';
        }
    }
}
