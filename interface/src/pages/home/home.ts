import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RefillPage } from '../refill/refill';
import { ProfilePage } from '../profile/profile';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    popup: any;
    todo: any;
    task: any;
    myList: any[] = [
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
        /*
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
            popupAction: () => { this.navCtrl.push(RefillPage)},
            popupActionText: 'refill'
        },
        */
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

    constructor(public navCtrl: NavController,
                public http: Http) {
        this.getLastTask();
    }
    
    openTodo() {
        this.todo = true;
    }
    
    openPopup(item) {
        item.popup = true;
        this.popup = item;
    }
    
    closePopup() {
        this.todo = false;
        this.task = undefined;
        if (this.popup) {
            this.popup.popup = false;
            this.popup = undefined;
        }
    }
    
    get suggestions() {
        if (!this.task) {
            return;
        }
        if (this.task.includes("refill") || this.task.includes("prescription") || this.task.includes("rx") || this.task.includes("script") || this.task.includes("pharmacy") || (this.task.includes("pill") && !this.task.includes("take pill"))) {
            return 0;
        } else if (this.task.includes("appointment") || this.task.includes("doctor") || this.task.includes("annual")) {
            return 1;
        } else if (this.task.includes("coffee") || this.task.includes("forget") || this.task.includes("take pill") || this.task.includes("meet")) {
            return 2;
        } else {
            return 4;
        }
    }
    
    navPush(i) {
        let toNav = [RefillPage, ProfilePage, "OOPS"];
        this.navCtrl.push(toNav[i]);
    }

    getTasks() {
        this.http.get("https://udjtloq8g2.execute-api.us-east-1.amazonaws.com/prod/username/angel/gettasks")
                 .map((res) => res.json())
                 .subscribe((data) => {
                     data.tasks.forEach((task) => {
                         this.myList.unshift({
                             icon: task.taskIcon,
                             text: task.taskName,
                             popup: false,
                             popupImg: "refill.png",
                             popupHeader: task.taskDescription,
                             popupBody: task.taskContent,
                             popupAction: () => { this.navCtrl.push(RefillPage)},
                             popupActionText: 'refill'
                         });
                     });
                 });
    }
    
    getLastTask() {
        this.http.get("https://udjtloq8g2.execute-api.us-east-1.amazonaws.com/prod/username/username/gettasks")
                 .map((res) => res.json())
                 .subscribe((data) => {
                     let task = data.tasks[0];
                     if (!task) {
                         return;
                     }
                     this.myList.unshift({
                         icon: task.taskIcon,
                         text: task.taskName,
                         popup: false,
                         popupImg: "refill.png",
                         popupHeader: task.taskDescription,
                         popupBody: task.taskContent,
                         popupAction: () => { this.navCtrl.push(RefillPage)},
                         popupActionText: 'refill'
                    });
                 });
    }
    
    addNewItem() {
        let data = {
            "username": "angel",
            "taskIcon": "",
            "taskName": this.task,
            "taskDescription": "spironolactone<br>75 mg tablet",
            "taskContent": "take one tablet by mouth once daily<br><br>rx#: 05432 0989023<br>dr. mark greene<br>refills: 2 before 5/10/2017<br><br>pharmacy: rite aid first ave",
            "taskType": "refill"
        };
        let task = data;
        this.myList.unshift({
                icon: task.taskIcon,
                text: task.taskName,
                popup: false,
                popupImg: "refill.png",
                popupHeader: task.taskDescription,
                popupBody: task.taskContent,
                popupAction: () => { this.navCtrl.push(RefillPage)},
                popupActionText: 'refill'
        });
        this.todo = false;
        this.popup = undefined;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        this.http.post("https://udjtloq8g2.execute-api.us-east-1.amazonaws.com/prod/username/username/", data, {headers: headers})
                 .map((res) => res.json())
                 .subscribe((data) => {
                     console.log(data);
                     this.getLastTask();
                 });
    }
}
