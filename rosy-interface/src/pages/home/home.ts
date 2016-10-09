import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private myList: any[] = [
        {
            icon: "lightning.png",
            text: "don't forget! pill at 12:30",
        },
        {
            icon: "coffee.png",
            text: "coffee with liz at 11 am",
        },
        {
            icon: undefined,
            text: "period in 3 days! tampons?",
        },
        {
            icon: "exercise.png",
            text: "spin class at 7pm",
        },
        {
            icon: undefined,
            text: "5 days til spironolactone refill",
        },
        {
            icon: undefined,
            text: "mom's bday soon! send her flowers",
        },
        {
            icon: "stress.png",
            text: "stressed? netflix & mask",
        },
        {
            icon: undefined,
            text: "1 month til annual: time to schedule",
        }
        
    ]

    constructor(public navCtrl: NavController) {

    }

}
