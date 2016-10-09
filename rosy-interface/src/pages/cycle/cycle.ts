import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cycle',
  templateUrl: 'cycle.html'
})
export class CyclePage {
    private randPeriod;
    private dropdowns: any[] = [
        {
            title: 'history',
        },
        {
            title: 'tracking diary',
        }
    ]
    private calendarSquares: any[] = [];
    private diary: any[] = [
        {
            ovulation: '2016-09-09',
            start: '2016-09-11',
            end: '2016-09-18'
        },
        {
            ovulation: '2016-08-09',
            start: '2016-08-12',
            end: '2016-08-19'
        },
        {
            ovulation: '2016-07-08',
            start: '2016-07-10',
            end: '2016-07-18'
        },
        {
            ovulation: '2016-06-08',
            start: '2016-06-09',
            end: '2016-06-17'
        },
        {
            ovulation: '2016-05-07',
            start: '2016-05-10',
            end: '2016-05-18'
        },
        {
            ovulation: '2016-04-09',
            start: '2016-04-11',
            end: '2016-04-18'
        },
    ];

    constructor(public navCtrl: NavController) {
        this.setRandPeriod();
        this.setCalendar();
    }
    
    setCalendar() {
        let firstDay = this.firstDay;
        for (let i = 0; i < 42; i++) {
            let num = (i >= firstDay) ? (i - firstDay <= this.monthLength) ? i - firstDay : undefined : undefined;
            this.calendarSquares.push({
                square: i,
                num: num
            });
        }
    }

    get monthYear() {
        let today = new Date();
        let mm = today.getMonth();
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        return months[mm] + ' ' + today.getFullYear();
    }
    
    get firstDay() {
        let today = new Date();
        let mm = today.getMonth()+1;
        let yy = today.getFullYear();
        let firstDate = new Date(yy + '-' + mm + '-01');
        let firstDay = firstDate.getDay();
        return firstDay;
    }
    
    get monthLength() {
        let today = new Date();
        let d = new Date(today.getFullYear(), today.getMonth()+1, 0);
        return d.getDate();
    }
    
    setRandPeriod() {
        this.randPeriod = Math.floor(Math.random() * 13)+1;
    }
    
    toggleDropdown(dropdown) {
        dropdown.open = !dropdown.open;
    }
}
