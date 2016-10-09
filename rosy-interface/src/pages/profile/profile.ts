import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RefillPage } from '../refill/refill';
import { CyclePage } from '../cycle/cycle';
import { events, DIARY } from '../../shared/constants/constants';

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
    private sendingEmail: boolean;
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
        if (this.sendingEmail) {
            return;
        }
        if (dropdown.title === 'refill a prescription') {
            this.navCtrl.push(RefillPage);
        }
        dropdown.open = !dropdown.open;
    }
    
    sendEmail(dropdown) {
        this.sendingEmail = true;
        window['emailjs'].send('default_service', 'template_oNkkRwDS', {
            "from": "Della Carter",
            "from_email": "dcarter@gmail.com",
            "date": this.date,
            "to": this.name,
            "to_email": this.email
        }).then((response) => {
            this.sendingEmail = false;
            dropdown.open = false;
            this.addDr(this.date);
            this.date = undefined;
            this.name = undefined;
            this.email = undefined;
            this.wh = undefined;
            this.xtra = undefined;
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, (err) => {
            this.sendingEmail = false;
            dropdown.open = false;
            console.log("FAILED. error=", err);
        });
    }
    
    addDr(date) {
        let dd = new Date(date);
        let d = dd.getDate()+1;
        events.push(d)
    }
    
    diaryToCSV() {
        let csv = 'ovulation,start,end\n';
        DIARY.forEach((entry) => {
            csv += entry.ovulation + ',' + entry.start + ',' + entry.end + '\n';
        });
    }
}
