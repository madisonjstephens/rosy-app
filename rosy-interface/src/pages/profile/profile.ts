import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RefillPage } from '../refill/refill';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    private userName = ''
    private name;
    private email;
    private wh;
    private journal;
    private date;
    private xtra;
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
        window['emailjs'].init("user_1Ir7hNIXcBASJvvUBWtK6");
        console.log(window['emailjs']);
    }
    
    toggleDropdown(dropdown) {
        if (dropdown.title === 'refill a prescription') {
            this.navCtrl.push(RefillPage);
        }
        dropdown.open = !dropdown.open;
    }
    
    sendEmail(dropdown) {
        window['emailjs'].send('default_service', 'template_oNkkRwDS', {
            "from": "Della Carter",
            "from_email": "dcarter@gmail.com",
            "date": this.date,
            "to": this.name,
            "to_email": this.email
        }).then(function(response) {
            dropdown.open = false;
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            console.log("FAILED. error=", err);
        });
    }
}
