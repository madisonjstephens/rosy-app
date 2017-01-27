import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { events, DIARY } from '../../shared/constants/constants';

@Component({
  selector: 'page-cycle',
  templateUrl: 'cycle.html'
})
export class CyclePage {
    randPeriod;
    dropdowns: any[] = [
        {
            title: 'history',
        },
        {
            title: 'tracking diary',
        }
    ]
    dates: any[] = [
        
    ];
    calendarSquares: any[] = [];
    diary = DIARY;
    
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
        this.randPeriod = Math.floor(Math.random() * 8)+10;
    }
    
    toggleDropdown(dropdown) {
        dropdown.open = !dropdown.open;
    }
    
    dayIsEvent(day) {
        return events.some((elem) => elem === day);
    }
}

