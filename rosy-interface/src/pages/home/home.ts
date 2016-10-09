import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private popup: any;
    private myList: any[] = [
        {
            icon: "lightning.png",
            text: "don't forget! pill at 12:30",
            popup: false
        },
        {
            icon: "coffee.png",
            text: "coffee with liz at 11 am",
            popup: false
        },
        {
            icon: undefined,
            text: "period in 3 days! tampons?",
            popup: false
        },
        {
            icon: "exercise.png",
            text: "spin class at 7pm",
            popup: false
        },
        {
            icon: undefined,
            text: "5 days til spironolactone refill",
            popup: false,
            popupImg: "refill.png",
            popupHeader: "spironolactone<br>75 mg tablet",
            popupBody: `take one tablet by mouth once daily<br><br>
                        rx#: 05432 0989023<br>
                        dr. mark greene<br>
                        refills: 2 before 5/10/2017<br><br>
                        pharmacy: rite aid first ave`,
            popupAction: () => { alert('ok')},
            popupActionText: 'refill'
        },
        {
            icon: undefined,
            text: "mom's bday soon! send her flowers",
            popup: false
        },
        {
            icon: "stress.png",
            text: "stressed? netflix & mask",
            popup: false
        },
        {
            icon: undefined,
            text: "1 month til annual: time to schedule",
            popup: false
        }
        
    ]

    constructor(public navCtrl: NavController) {

    }
    
    openPopup(item) {
        item.popup = true;
        this.popup = item;
    }
    
    closePopup() {
        this.popup.popup = false;
        this.popup = undefined;
    }
}
