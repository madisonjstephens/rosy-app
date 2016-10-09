import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    private dropdowns: any[] = [
        {
            title: 'profile settings',
        },
        {
            title: 'order the goods',
        },
        {
            title: 'refill a prescription',
        },
        {
            title: 'schedule an appointment',
            open: false
        },
        {
            title: 'get delivery',
        },
        {
            title: 'notifications',
        }
    ];
    
    constructor(public navCtrl: NavController) {

    }
    
    toggleDropdown(dropdown) {
        dropdown.open = !dropdown.open;
    }
}
