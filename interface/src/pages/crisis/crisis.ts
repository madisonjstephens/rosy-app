import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CallNumber } from 'ionic-native';

@Component({
  selector: 'page-crisis',
  templateUrl: 'crisis.html'
})
export class CrisisPage {
    dropdowns: any[] = [
        {
            title: 'sexual assault',
        },
        {
            title: 'unprotected sex',
        },
        {
            title: 'domestic abuse',
        },
        {
            title: 'mental health',
        },
        {
            title: 'sexual harassment',
        },
        {
            title: 'STIs',
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
    
    callForHelp() {
        CallNumber.callNumber('13473661509', false)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error!!! :('));
    }
    
    toggleDropdown(dropdown) {
        dropdown.open = !dropdown.open;
    }
}
